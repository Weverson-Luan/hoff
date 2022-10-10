/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
import {Alert} from 'react-native';

//utils
// import {PickerImage} from '../../../utils/select-picker-image';

//assets
import {CardNewPhotos} from '../../../components/CardNewPhotos';
import ArrowRightSVG from '../../../assets/arrow-right.svg';
import UploadSVG from '../../../assets/upload.svg';
import CameraVG from '../../../assets/camera.svg';

//typings
import {IParams} from './index.d';

//styles-components
import {Wrapper, WrapperBox, Title} from './styles';
import { PickerImage } from '../../../utils/select-picker-image';

export function NewPhotos() {
  const navigation = useNavigation();
  const route = useRoute();
  const {patient_id, name, register, patientQuery} = route.params as IParams;
  const [, requestPermission] = useState(null);
  const [patient_query, setPatientQuery] = useState<number>();
  /**
   * NAVIGATION-ANALYZE
   */
  const handleNavigationAnalyze = () => {
    navigation.navigate('Analyze', {
      patient_id: patient_id,
      patientQuery: patient_query,
    });
  };

  /**
   * SELECT AN IMAGE ON USER DEVICE
   */
  // const selectImage = async () => {
  //   if (status.granted === true) {
  //     PickerImage()
  //       .then(responseImage => {
  //         if (!responseImage) {
  //           return Alert.alert(
  //             'Nenhuma imagem selecionada',
  //             'Selecione uma image para continuar.',
  //             [
  //               {
  //                 text: 'Cancel',
  //                 onPress: () =>
  //                   navigation.navigate('NewPhotos', {
  //                     name: name,
  //                     patient_id: patient_id,
  //                   }),
  //                 style: 'cancel',
  //               },
  //               {
  //                 text: 'OK',
  //                 onPress: () =>
  //                   navigation.navigate('NewPhotos', {
  //                     name: name,
  //                     patient_id: patient_id,
  //                   }),
  //               },
  //             ],
  //           );
  //         }
  //         navigation.navigate('PatientsCategory', {
  //           img: responseImage,
  //           patient_id: patient_id.patient_id
  //             ? patient_id.patient_id
  //             : patient_id,
  //           name: name,
  //           register: register,
  //         });
  //       })
  //       .catch(error => {
  //         console.error('Error selectImage', error);
  //       });
  //   }
  // };

    /**
   * SELECT AN IMAGE ON USER DEVICE
   */
     const handleSelectImage = async () => {
      try {
        const response = await PickerImage();
        response?.map(responseImage => {
          if (!responseImage) {
                      return Alert.alert(
                        'Nenhuma imagem selecionada',
                        'Selecione uma image para continuar.',
                        [
                          {
                            text: 'Cancel',
                            onPress: () =>
                              navigation.navigate('NewPhotos', {
                                name: name,
                                patient_id: patient_id,
                              }),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () =>
                              navigation.navigate('NewPhotos', {
                                name: name,
                                patient_id: patient_id,
                              }),
                          },
                        ],
                      );
            }
            navigation.navigate('PatientsCategory', {
              img: responseImage.uri,
              patient_id: patient_id.patient_id
                ? patient_id.patient_id
                : patient_id,
              name: name,
              register: register,
            });
        });
      } catch (error) {
        Alert.alert(
          'Error em importar image',
          'Não foi possivél fazer a importação de image.',
        );
      }
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
            patient_query,
            name,
            register,
          })
        }
      />
      <CardNewPhotos
        iconSVG={() => <UploadSVG width={22} height={22} />}
        icon={() => <ArrowRightSVG width={22} height={22} />}
        title="Importar uma foto"
        subTitle="Importe uma foto através da mídia do seu celular"
        onPress={() =>handleSelectImage()}
      />

      <CardNewPhotos
        iconSVG={() => <UploadSVG width={22} height={22} />}
        icon={() => <ArrowRightSVG width={22} height={22} />}
        title="Colagem de fotos"
        subTitle="Faça uma colagem fotos comparativa"
        onPress={() => handleNavigationAnalyze()}
      />
    </Wrapper>
  );
}
