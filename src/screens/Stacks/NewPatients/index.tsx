/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTheme} from 'styled-components';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//input mask
import MaskInput from 'react-native-mask-input';

//components
import {Button} from '../../../components/Form/Button';
import {Input} from '../../../components/Form/Input';
import {IResponseToken} from '../../../dtos/token';
import {handleCreatePatients} from '../../../services/patients/patients';
import {Load} from '../../../components/Load';

//styles-components
import {
  Wrapper,
  WrapperBox,
  Title,
  WrapperInput,
  WrapperButton,
  TitleButton,
} from './styles';

export function NewPatients() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [patient, setPatient] = useState({}) as any;

  /**
   * Save one patient
   * @returns
   */
  const handleSavePatient = async () => {
    setIsLoading(true);
    const key = '@login_user';
    const token = await AsyncStorage.getItem(key);
    const tokenTransform: IResponseToken = JSON.parse(token as any);
    const data = {
      nome: name,
      email: email,
      telefone: phone,
    };
    if (tokenTransform.usuario) {
      if (!data.nome) {
        Alert.alert(
          'Não foi possivel cadastrar',
          'Voce Precisa infroma um nome de paciente.',
        );
        return setIsLoading(false);
      }
      handleCreatePatients(data, tokenTransform.token)
        .then(response => {
          setIsLoading(false);
          setPatient(response.data);
          if (response.data.success) {
            if (response.data.data) {
              setName('');
              setEmail('');
              setPhone('');
              return navigation.navigate('NewPhotos', {
                patient_id: response.data.data.id,
                name: name,
                register: true,
              });
            }
            Alert.alert('Não foi possivel cadastrar', response.data.message);

            return setIsLoading(false);
          }
        })
        .catch(error => {
          setIsLoading(false);
          Alert.alert(
            'Não foi possivel cadastrar',
            'Já possui um paciente cadastrado, tente novamente.',
          );
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <>
      <Wrapper>
        <WrapperBox>
          <Title>Dados gerais</Title>
        </WrapperBox>

        <WrapperInput>
          <Input
            width="372px"
            height="53px"
            color={theme.colors.brand_secondary}
            placeholder="Nome"
            placeholderTextColor={theme.colors.brand_gray_100}
            onChangeText={text => setName(text)}
          />

          <Input
            width="372px"
            height="53px"
            color={theme.colors.brand_secondary}
            placeholder="E-mail"
            placeholderTextColor={theme.colors.brand_gray_100}
            onChangeText={text => setEmail(text)}
          />

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
            placeholder="Telefone para contato"
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
        </WrapperInput>
      </Wrapper>

      <WrapperButton>
        <Button
          onPress={() => {
            handleSavePatient();
          }}
          width="100%"
          height="56px"
          background_color={theme.colors.brand_primary}
          border
          disabled={isLoading}>
          {isLoading ? (
            <Load color={theme.colors.brand_white} small={30} />
          ) : (
            <TitleButton>Avançar</TitleButton>
          )}
        </Button>
      </WrapperButton>
    </>
  );
}
