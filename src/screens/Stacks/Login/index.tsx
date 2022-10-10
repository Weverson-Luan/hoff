import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import {authenticationLoginWithPassword} from '../../../services/auth/auht';

//dtos
import {IAuthenticationUsers} from '../../../dtos/authenticate-login-with-password';

//styled-components
import {
  Wrapper,
  WrapperHeaderArrow,
  WrapperLogo,
  WrapperDescription,
  TextDescription,
  WrapperInput,
  TitleError,
  WrapperInputPassword,
  ButtonEye,
  WrapperForget,
  TitleForget,
  WrapperButton,
  TextButton,
  TextOu,
  TextButtonNew,
} from './styles';

export function Login() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblyPassword, setVisiblyPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAuthenticationUsers = async () => {
    const data: IAuthenticationUsers = {
      email: email,
      password: password,
    };
    setIsLoading(!isLoading);
    await authenticationLoginWithPassword(data)
      .then(response => {
        const key = '@login_user';
        const dataTransform = JSON.stringify(response.data);
        AsyncStorage.setItem(key, dataTransform);
        navigation.navigate('Authentication');
        setIsLoading(!isLoading);
        setEmail('');
        setPassword('');
      })
      .catch(_errorAuthentication => {
        setError(true);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <Wrapper>
        <WrapperHeaderArrow onPress={() => {}}>
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
            placeholder="E-mail"
            placeholderTextColor={'#ccdcd'}
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
          {error && (
            <TitleError>
              Houve um problema em fazer login senha ou email inválidos
            </TitleError>
          )}
        </WrapperInput>

        <WrapperForget>
          <TitleForget>Esqueci a senha</TitleForget>
        </WrapperForget>

        <WrapperButton>
          <Button
            onPress={() => {
              handleAuthenticationUsers();
            }}
            width="100%"
            height="56px"
            background_color={theme.colors.brand_primary}
            border>
            {isLoading ? (
              <Load color={theme.colors.brand_white} small={30} />
            ) : (
              <TextButton>Entrar</TextButton>
            )}
          </Button>

          <TextOu>OU</TextOu>

          <Button
            onPress={() => navigation.navigate('Register')}
            width="100%"
            height="56px"
            background_color={theme.colors.brand_secondary}
            border>
            <TextButtonNew>Criar nova conta</TextButtonNew>
          </Button>
        </WrapperButton>

        <WrapperDescription>
          <TextDescription>
            Ao clicar em “Entrar” ou “Criar conta” você estará concordando com
            os nossos Termos e Condições e Política de Privacidade
          </TextDescription>
        </WrapperDescription>
      </Wrapper>
    </>
  );
}
