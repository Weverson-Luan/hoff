/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useRoute} from '@react-navigation/native';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IResponseToken} from '../../../dtos/token';
import {getPatientsInfo} from '../../../services/patients/patients';
import {IPatientWatch} from '../../../dtos/patients-watch';
import {View} from 'native-base';

//components
import {CardDescription} from '../../../components/CardDescripition';
import {CardPhoto} from '../../../components/CardPhoto';
import {ButtonFloatWatch} from '../../../components/Form/ButtonFloatWatch';
import {ButtonNote} from '../../../components/Form/ButtonNote';

//styles-components
import {
  Wrapper,
  Main,
  WrapperPhoto,
  WrapperBox,
  Title,
  TitleAll,
  TitleGeneral,
  TitlePhotos,
  WrapperFloat,
} from './styles';

interface IParams {
  patient_id: number;
}
export function Watch() {
  const theme = useTheme();
  const id = useRoute();
  const {patient_id} = id.params as IParams;
  const [patients, setPatients] = useState<IPatientWatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const handlePatientInfo = async () => {
        const token = await AsyncStorage.getItem('@login_user');
        /**
         * IF USER IS LOGGED IN WITH THEIR ACCOUNT CREATED BY THE APP
         */
        if (token) {
          const tokenTransform: IResponseToken = JSON.parse(token);
          await getPatientsInfo(patient_id, tokenTransform?.token)
            .then(response => {
              setPatients(response.data.data);
              setIsLoading(!isLoading);
            })
            .catch(error => console.error('Error listing patients', error));
        }
      };
      handlePatientInfo();
    }
    return () => {
      isMounted = false;
    }; //disassembling component
  }, [patients]);
  return (
    <>
      <Wrapper>
        <Main>
          <WrapperBox>
            <ButtonNote
              width="66px"
              height="32px"
              background_color={theme.colors.brand_primary}
              onPress={() => {
                setPhotos(!photos);
              }}>
              <TitleAll>Todas</TitleAll>
            </ButtonNote>
            <ButtonNote
              width="78px"
              height="32px"
              background_color={theme.colors.brand_secondary}
              border={theme.colors.brand_white}
              onPress={() => {
                setPhotos(!photos);
              }}>
              <TitleGeneral>Gerais</TitleGeneral>
            </ButtonNote>

            <ButtonNote
              width="100px"
              height="32px"
              background_color={theme.colors.brand_secondary}
              border={theme.colors.brand_white}
              onPress={() => {
                setPhotos(!photos);
              }}>
              <TitlePhotos>Em fotos</TitlePhotos>
            </ButtonNote>
          </WrapperBox>
        </Main>

        <>
          <CardDescription
            title="Gerais"
            patient_id={patient_id}
            observation={patients?.consultas}
          />
          <WrapperPhoto>
            <Title>Em fotos</Title>
          </WrapperPhoto>
          {patients?.consultas.map(item => (
            <View key={item.id}>
              {item.fotos.map(photo => (
                <View key={photo.id}>
                  <CardPhoto key={photo.id} data={photo} />
                </View>
              ))}
            </View>
          ))}
        </>
      </Wrapper>

      {/* COMPONENT INACTIVE */}

      {/* <WrapperFloat>
         <ButtonFloatWatch
         />
      </WrapperFloat> */}
    </>
  );
}
