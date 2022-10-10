/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';

//assets
import {CardNewPhotos} from '../../../components/CardNewPhotos';
import ArrowRightSVG from '../../../assets/arrow-right.svg';
import UploadSVG from '../../../assets/upload.svg';
import CameraVG from '../../../assets/camera.svg';

//typings
import {IParams} from './index.d';

//styles-components
import {Wrapper, WrapperBox, Title} from './styles';

export function NewPhotosCollage() {
  const navigation = useNavigation();
  const route = useRoute();
  const {patient_id, name, register, patientQuery, position} =
    route.params as IParams;
  const [status, requestPermission] = useState(null);
  const [patient_query, setPatientQuery] = useState<number>();

  /**
   * NAVIGATION-ANALYZE
   */
  const handleNavigationPatientImageGallery = () => {
    navigation.navigate('PatientImageGallery', {
      patient_id: patient_id,
      patient_query: route.params.patient_query
        ? route.params.patient_query
        : patientQuery,
      position: position,
    });
  };

  /**
   * UseEffect
   */
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setPatientQuery(patientQuery?.pop());
      requestPermission(null);
    }
  }, []);

  return (
    <Wrapper>
      <WrapperBox>
        <Title>Nova foto</Title>
      </WrapperBox>

      <CardNewPhotos
        iconSVG={() => <CameraVG width={22} height={22} />}
        icon={() => <ArrowRightSVG width={22} height={22} />}
        title="Tirar uma nova foto"
        subTitle="Tire uma foto através da câmera do seu celular"
        onPress={() =>
          navigation.navigate('CapturePhoto', {
            patient_id,
            patient_query: route.params.patient_query,
            name,
            register,
            position,
          })
        }
      />

      <CardNewPhotos
        iconSVG={() => <UploadSVG width={22} height={22} />}
        icon={() => <ArrowRightSVG width={22} height={22} />}
        title="Selecione foto da consulta"
        subTitle="Selecione uma image da sua consultas"
        onPress={() => handleNavigationPatientImageGallery()}
      />
    </Wrapper>
  );
}
