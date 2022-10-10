import React, {useState, useEffect} from 'react';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { PickerImage } from '../../../utils/select-picker-image';

//axios
import axios from 'axios';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//input mask
import MaskInput from 'react-native-mask-input';

//components
import {useTheme} from 'styled-components';
import {Input} from '../../../components/Form/Input';
import {Load} from '../../../components/Load';
import {Button} from '../../../components/Form/Button';


//typings-dto
import {IResponseToken} from '../../../dtos/token';

//assets
import LogoutSVG from '../../../assets/logout.svg';

//services
import {getUsersInfo, updateUser} from '../../../services/users';

//utils
import {handleRemoveTokenUser} from '../../../utils/remove-token-user';
import {formatString} from '../../../utils/format-string';

//styled-components
import {
  Wrapper,
  WrapperImage,
  Image,
  WrapperTitle,
  Title,
  WrapperBox,
  WrapperInput,
  WrapperMain,
  TitleGeneral,
  WrapperIcon,
  WrapperLogout,
  TitleLogout,
  TitleButtonUpdate,
} from './styles';

export function Account() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [status, requestPermission] = useState<any>();
  const [_data, setData] = useState<IUser>({} as IUser);
  const [dataGoogle, setDataGoogle] = useState<IUser>({} as IUser);
  const [isLoading, setIsLoading] = useState(true);
  const [_tokenUser, setTokenUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<string | null>('');

  const handleUpdateUser = async () => {
    const key = '@login_user';
    const user = await AsyncStorage.getItem(key);
    const userTransform = JSON.parse(user as any);

    /**
     * PEGANDO TOKEN
     */
    const token = await AsyncStorage.getItem(key);
    const tokenTransform: IResponseToken = JSON.parse(token as any);
    const photo: any = {
      uri: file,
      type: 'image/jpeg',
      name: 'photo.jpg',
    };
    const data = new FormData();
    data.append('file', photo);
    data.append('name', name);
    data.append('email', email);
    data.append('telefone', phone);
    data.append('id', userTransform.usuario.id);

    await updateUser(tokenTransform.token, data)
      .then((responseUserUpdated: any) => {
        setDataGoogle(responseUserUpdated);
        Alert.alert(
          'Atulização de dados',
          'Suas informaçãos foram salvas com sucesoo',
        );
      })
      .catch(error => console.log('ERROR EM ATUALIZAR USER', error));
  };

  /**
   * REMOVENDO TOKEN
   */
  const removeTokenUser = async () => {
    await handleRemoveTokenUser('@login_user')
      .then(res => console.log(res))
      .catch(error => console.log('error em remover token', error));
  };

  /**
   * SELECT AN IMAGE ON USER DEVICE
   */
   const handleImage = async () => {
    try {
      const response = await PickerImage();
      response?.map(item => {
        setFile(String(item.uri));
      });
    } catch (error) {
      Alert.alert(
        'Error em importar image',
        'Não foi possivél fazer a importação de image.',
      );
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const handlePatients = async () => {
        const key = '@login_user';
        const user_key = '@data_user';
        const token = await AsyncStorage.getItem(key);

        setTokenUser(token as any);
        const tokenTransform: any = JSON.parse(token as any);

        getUsersInfo(tokenTransform?.token)
          .then(response => {
            setData(response?.data);
            setName(response.data.data[0].nome);
            setEmail(response.data.data[0].email);
            setPhone(response.data.data[0].telefone);
            setDataGoogle(response.data.data[0]);
            const transformDate = JSON.stringify(response.data);
            AsyncStorage.setItem(user_key, transformDate);
            setIsLoading(!isLoading);
          })
          .catch(error => {
            const handleTokenGoogleUser = async () => {
              const key = '@user_account'; // key save user google
              const user_key = '@data_user'; // key data save user google
              const token = await AsyncStorage.getItem(key);

              const tokenTransform = JSON.parse(token as any);
              const tokenFormat = formatString(tokenTransform);

              /**
               * BUSCA NA API GOOGLE-CLOUD-PLATFORM
               */
              await axios
                .get(
                  `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${tokenFormat}`,
                )
                .then(async response => {
                  setDataGoogle(response.data);
                  const result_user = JSON.stringify(response.data);
                  await AsyncStorage.setItem(user_key, result_user);
                  return setIsLoading(!isLoading);
                })
                .catch(error =>
                  console.error('error serch user-google', error),
                );
              setTokenUser(token as any);
            };
            handleTokenGoogleUser();
            console.error('error in list user', error);
          });
        return tokenTransform;
      };

      handlePatients();
    }
  }, []);

  useEffect(() => {
    requestPermission(true);
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Load color={theme.colors.brand_primary} small={30} />
      ) : (
        <>
          <WrapperBox>
            <View key={dataGoogle.id}>
            <WrapperImage onPress={()=> handleImage()}>
                 {
                  !file?
                  <>
                     <Image
                        source={{ uri: dataGoogle.imagem ? dataGoogle.imagem :'https://api-hof.worktabsystems.com.br/images/default.jpeg'}}
                      />

                    <WrapperTitle>
                      <Title>Mudar foto</Title>
                    </WrapperTitle>
                  </>

                  :
                  <>
                     <Image
                    source={{ uri: file ? file :'https://api-hof.worktabsystems.com.br/images/default.jpeg'}}
                  />

                  <WrapperTitle>
                    <Title>Mudar foto</Title>
                  </WrapperTitle>
                  </>
                 }
              </WrapperImage>

              <TitleGeneral>Dados gerais</TitleGeneral>
              <WrapperMain key={dataGoogle.id}>
                <WrapperInput>
                  <Input
                    width="372px"
                    height="53px"
                    color={theme.colors.brand_secondary}
                    placeholder={'Digite o seu nome'}
                    placeholderTextColor={theme.colors.brand_white}
                    value={name}
                    onChangeText={text => setName(text)}
                  />

                  <WrapperIcon />
                </WrapperInput>

                <WrapperInput>
                  <Input
                    width="372px"
                    height="53px"
                    color={theme.colors.brand_secondary}
                    placeholder={'Digite o seu email'}
                    placeholderTextColor={theme.colors.brand_white}
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />

                  <WrapperIcon />
                </WrapperInput>

                <WrapperInput>
                  <MaskInput
                    style={{
                      borderWidth: 1,
                      borderColor: theme.colors.brand_gray_100,
                      width: 372,
                      height: 53,
                      color: theme.colors.brand_gray_100,
                      padding: 16,
                      borderRadius: 6,
                    }}
                    value={phone}
                    placeholder={'Digite o seu telefone'}
                    placeholderTextColor={theme.colors.brand_gray_100}
                    onChangeText={(masked, unmasked) => {
                      setPhone(masked);
                    }}
                    mask={[
                      '(',
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />

                  <WrapperIcon />
                </WrapperInput>
              </WrapperMain>
            </View>
          </WrapperBox>

          <WrapperBox>
            <Button
              onPress={() => {
                handleUpdateUser();
              }}
              width="100%"
              height="56px"
              background_color={theme.colors.brand_primary}
              border>
              {isLoading ? (
                <Load color={theme.colors.brand_white} small={30} />
              ) : (
                <TitleButtonUpdate>Salvar</TitleButtonUpdate>
              )}
            </Button>
          </WrapperBox>

          <WrapperLogout
            onPress={() => {
              removeTokenUser();
              navigation.navigate('SignIn');
            }}>
            <LogoutSVG width={22} height={22} />
            <TitleLogout>Logout</TitleLogout>
          </WrapperLogout>
        </>
      )}
    </Wrapper>
  );
}
