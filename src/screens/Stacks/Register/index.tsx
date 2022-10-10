/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useState} from 'react';
import {Alert} from 'react-native';

//assets
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

//assets
import ArrowLeftSVG from '../../../assets/arrow-left.svg';
import LogoSVG from '../../../assets/logo-signin.svg';
import EyeSVG from '../../../assets/eye.svg';
import EyeCheckSVG from '../../../assets/eye-check.svg';

//components
import {Input} from '../../../components/Form/Input';
import {Button} from '../../../components/Form/Button';
import {Load} from '../../../components/Load';

//services
import {createUserWithEmailAndPassword} from '../../../services/users';

//styled-components
import {
  Wrapper,
  WrapperHeaderArrow,
  WrapperLogo,
  WrapperInput,
  WrapperInputPassword,
  ButtonEye,
  WrapperButton,
  TextButton,
} from './styles';

export function Register() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblyPassword, setVisiblyPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // const handleCreateUserWithEmailAndPassword = async () => {
  //   const data = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };
  //   setIsLoading(!isLoading);
  //   await createUserWithEmailAndPassword(data)
  //     .then(async responseRegisterUser => {
  //       Alert.alert('Cadastro de usuário', 'Usuário foi criado com sucesso.');
  //       setIsLoading(!isLoading);
  //       setName('');
  //       setEmail('');
  //       setPassword('');

  //       if (responseRegisterUser.status === 200) {
  //         setTimeout(() => {
  //           navigation.navigate('Login');
  //         }, 2000);
  //       }
  //     })
  //     .catch((error: any) => {
  //       Alert.alert(
  //         'Cadastro de usuário',
  //         'Não foi possivel cadastrar usuário feche o app e tente novamente.',
  //       );
  //       setIsLoading(false);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <>
      <Wrapper>
        <WrapperHeaderArrow onPress={() => navigation.goBack()}>
          <ArrowLeftSVG width={22} height={22} />
        </WrapperHeaderArrow>

        <WrapperLogo>
          <LogoSVG width={144} height={144} />
        </WrapperLogo>

        <WrapperInput>
          <Input
            width="100%"
            height="53px"
            color={theme.colors.brand_secondary}
            placeholder="Digite seu nome"
            placeholderTextColor={theme.colors.brand_gray_100}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Input
            width="100%"
            height="53px"
            color={theme.colors.brand_secondary}
            placeholder="Digite seu e-mail"
            placeholderTextColor={theme.colors.brand_gray_100}
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <WrapperInputPassword>
            <Input
              width="100%"
              height="53px"
              color={theme.colors.brand_secondary}
              placeholder="Senha de acesso"
              placeholderTextColor={theme.colors.brand_gray_100}
              secureTextEntry={visiblyPassword}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <ButtonEye onPress={() => setVisiblyPassword(!visiblyPassword)}>
              {visiblyPassword ? (
                <EyeSVG
                  width={22}
                  height={22}
                  style={{marginLeft: -36, marginTop: 15}}
                />
              ) : (
                <EyeCheckSVG
                  width={22}
                  height={22}
                  style={{marginLeft: -36, marginTop: 15}}
                />
              )}
            </ButtonEye>
          </WrapperInputPassword>
        </WrapperInput>

        <WrapperButton>
          <Button
            onPress={() => {}}
            width="100%"
            height="56px"
            background_color={theme.colors.brand_primary}
            border>
            {isLoading ? (
              <Load color={theme.colors.brand_white} small={30} />
            ) : (
              <TextButton>Registrar</TextButton>
            )}
          </Button>
        </WrapperButton>
      </Wrapper>
    </>
  );
}
