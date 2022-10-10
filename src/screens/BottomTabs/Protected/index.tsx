/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

//assets
import GroupWhiteSVG from '../../../assets/gallery-withe.svg';

//components
import {Button} from '../../../components/Form/Button';

//styles-components
import {
  Wrapper,
  WrapperBox,
  Title,
  WrapperSwitch,
  WrapperButton,
  TitleMain,
  WrapperNotification,
  TitleNotification,
} from './styles';

export function Protected() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchPassword = () =>
    setIsEnabledPassword(previousState => !previousState);
  const [isEnabledPassword, setIsEnabledPassword] = useState(false);
  const toggleSwitchBlocked = () =>
    setIsEnableBlocked(previousState => !previousState);
  const [isEnableBlocked, setIsEnableBlocked] = useState(false);
  const toggleSwitchNotification = () =>
    setIsEnableNotification(previousState => !previousState);
  const [isEnabledNotification, setIsEnableNotification] = useState(false);
  return (
    <>
      <Wrapper>
        {/* <WrapperBox>
           <Title>Bloqueio</Title>
        </WrapperBox>

      <WrapperButton>
         <WrapperSwitch>
            <TitleMain>Proteger app com biometria</TitleMain>
            <Switch
            trackColor={{ false: "#767577", true: "#987500" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#767577"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
         </WrapperSwitch>

         <WrapperSwitch>
            <TitleMain>Proteger app com senha</TitleMain>
            <Switch
            trackColor={{ false: "#767577", true: "#987500" }}
            thumbColor={isEnabledPassword ? "#f5dd4b" : "#767577"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchPassword}
            value={isEnabledPassword}
            />
         </WrapperSwitch>

         <WrapperSwitch>
            <TitleMain>Bloquear após 20 minutos sem uso</TitleMain>
            <Switch
            trackColor={{ false: "#767577", true: "#987500" }}
            thumbColor={isEnableBlocked ? "#f5dd4b" : "#767577"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchBlocked}
            value={isEnableBlocked}
            />
         </WrapperSwitch>
      </WrapperButton>  */}

        <WrapperBox>
          <Title>Notificações</Title>
        </WrapperBox>

        <WrapperNotification>
          <TitleNotification>
            Ser notificado caso um paciente seja aberto em outro dispositivo
          </TitleNotification>
          <Switch
            trackColor={{false: '#767577', true: '#987500'}}
            thumbColor={isEnabledNotification ? '#f5dd4b' : '#767577'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchNotification}
            value={isEnabledNotification}
          />
        </WrapperNotification>
      </Wrapper>
    </>
  );
}
