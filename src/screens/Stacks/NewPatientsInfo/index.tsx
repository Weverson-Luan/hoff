/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';
// import * as ImagePicker from 'expo-image-picker';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//assets
import GroupWhiteSVG from '../../../assets/gallery-withe.svg';

//components
import {Button} from '../../../components/Form/Button';
import {PickerImage} from '../../../utils/select-picker-image';

//dto
import {IResponseToken} from '../../../dtos/token';

//styles-components
import {
  Wrapper,
  WrapperBox,
  Title,
  WrapperIcon,
  WrapperButton,
  TitleIcon,
  TitleButton,
  ButtonSubTitle,
  SubTitleButton,
  WrapperImage,
  Image,
} from './styles';
import {useEffect, useState} from 'react';
import {uploadPatientsPhoto} from '../../../services/patients/patients';
import {HeaderPatientInfo} from '../../../components/HeaderPatientInfo';

interface IParams {
  patient_id: number;
}

export function NewPatientsInfo() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [status, requestPermission] = useState(null);
  const [imageSelect, setSelect] = useState('');
  //   const [isLoading, setIsLoading] = useState(false);

  const id = useRoute();
  const {patient_id} = id.params as IParams;

  const handleSavePatient = async () => {
    const key = '@login_user';
    const token = await AsyncStorage.getItem(key);
    const tokenTransform: IResponseToken = JSON.parse(token as any);

    /**
     *  SELECT AN IMAGE ON USER DEVICE
     */
    //  if (status.granted === true) {
    //    PickerImage()
    //      .then(response => {
    //        setSelect(response);
    //        const photos: any = {
    //          uri: response,
    //          type: 'image/jpeg',
    //          name: 'photo.jpg',
    //        };

    //        /**
    //         * IF USER IS LOGGED IN WITH YOUR GOOGLE ACCOUNT
    //         */
    //        if (tokenTransform) {
    //          const data = new FormData();
    //          data.append('file', photos);
    //          data.append('paciente_id', patient_id);

    //          uploadPatientsPhoto(data, String(tokenTransform))
    //            .then(response => {
    //              setIsLoading(false);
    //              setSelect('');

    //              return navigation.navigate('PatientsInfo', {
    //                patient_id: patient_id,
    //              });
    //            })
    //            .catch(error =>
    //              console.error('Error in save photo google', error),
    //            );

    //        /**
    //         * IF USER IS LOGGED IN WITH THEIR ACCOUNT CREATED BY THE APP
    //         */
    //        if (tokenTransform.usuario) {
    //          const data = new FormData();
    //          data.append('file', photos);
    //          data.append('paciente_id', patient_id);
    //          uploadPatientsPhoto(data, tokenTransform.token)
    //            .then(response => {
    //              setIsLoading(false);
    //              setSelect('');
    //              return navigation.navigate('PatientsInfo', {
    //                patient_id: patient_id,
    //              });
    //            })
    //            .catch(error => console.error('Error in save photo', error));
    //        }
    //      })
    //      .catch(error => {
    //        console.error('Error selectImage', error);
    //      });
    //  }
  };

  useEffect(() => {
    requestPermission(null);
  }, []);
  return (
    <Wrapper>
      {imageSelect ? (
        <WrapperImage>
          <Image
            source={{
              uri: imageSelect
                ? imageSelect
                : 'https://api-hof.worktabsystems.com.br/images/default.jpeg',
            }}
          />
        </WrapperImage>
      ) : (
        <>
          <WrapperBox>
            <Title>Fotos</Title>
          </WrapperBox>
          <WrapperIcon>
            <GroupWhiteSVG width={24} height={24} />
            <TitleIcon>
              Não há fotos do paciente. Clique no botão abaixo para tirar ou
              importar fotos
            </TitleIcon>
          </WrapperIcon>
        </>
      )}
    </Wrapper>
  );
}
