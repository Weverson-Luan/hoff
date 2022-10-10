import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

//auth-google-sigin
import {GoogleSignin} from '@react-native-google-signin/google-signin';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//assets
import LogoSVG from '../../../assets/logo-signin.svg';
import GoogleSVG from '../../../assets/google.svg';
import AppleSVG from '../../../assets/apple.svg';
import EmailSVG from '../../../assets/email.svg';
import Image from '../../../assets/fundo-preto.png';

//components
import {Button} from '../../../components/Form/Button';

//dtos
import {apiBaseUrl} from '../../../services/api';

//styled-components
import {
  Wrapper,
  WrapperLogo,
  ImageLogo,
  WrapperButton,
  TitleButtonGoogle,
  WrapperWithoutAccount,
  TextWithoutAccount,
  WrapperDescription,
  TextDescription,
} from './styles';

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [_, setToken] = useState('');

  async function onGoogleButtonPress() {
    const {user} = await GoogleSignin.signIn();

    const userGoogle = {
      name: user.name,
      email: user.email,
      picture: user.photo,
      google_user_id: user.id,
    };

    //api para registar o usuário do google, caso usuário exista apenas loga normal.
    await apiBaseUrl
      .post(`/register-google`, userGoogle)
      .then(async response => {
        const key = '@login_user';
        const tokenTransform = JSON.stringify(response.data);
        await AsyncStorage.setItem(key, tokenTransform);
        return navigation.navigate('Authentication');
      })
      .catch(error => console.error('Error register user Google'));
    return;
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '680962317714-gm5c7fri6lkogsadeh6es0794pdr1p93.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    });
  }, []);

  return (
    <Wrapper>
      <WrapperLogo>
        <ImageLogo source={Image} />
      </WrapperLogo>

      <WrapperButton>
        <Button
          width="100%"
          height="56px"
          background_color={theme.colors.brand_secondary}
          border
          onPress={() => {
            onGoogleButtonPress();
          }}>
          <GoogleSVG width={20} height={20} />
          <TitleButtonGoogle>Entrar com conta Google</TitleButtonGoogle>
        </Button>

        {/* <Button
          width="100%"
          height="56px"
          background_color={theme.colors.brand_secondary}
          border>
          <AppleSVG width={20} height={20} />
          <TitleButtonGoogle>Entrar com conta Apple</TitleButtonGoogle>
        </Button> */}

        <Button
          onPress={() => navigation.navigate('Login')}
          width="100%"
          height="56px"
          background_color={theme.colors.brand_secondary}
          border>
          <EmailSVG width={20} height={20} />
          <TitleButtonGoogle>Entrar com um e-mail</TitleButtonGoogle>
        </Button>
      </WrapperButton>

      {/* <WrapperWithoutAccount>
              <TextWithoutAccount>Entrar sem uma conta</TextWithoutAccount>
      </WrapperWithoutAccount> */}

      <WrapperDescription>
        <TextDescription>
          Ao clicar em “Entrar” ou “Criar conta” você estará concordando com os
          nossos Termos e Condições e Política de Privacidade
        </TextDescription>
      </WrapperDescription>
    </Wrapper>
  );
}
