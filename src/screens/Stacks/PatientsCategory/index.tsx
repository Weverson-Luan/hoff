import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import {Button} from '../../../components/Form/Button';
import {Input} from '../../../components/Form/Input';
import {Load} from '../../../components/Load';

//typings
import {MainProps} from '../../../dtos/main-props';
import {IResponseToken} from '../../../dtos/token';
import {IPatientProps} from '../../../dtos/patient-image';
import {IPhotoProps} from './index.d';

//services
import {uploadPatientsPhoto} from '../../../services/patients/patients';

//styled-components
import {
  Wrapper,
  Image,
  WrapperImage,
  WrapperSelect,
  WrapperButton,
  TitleButton,
  SubTitleButton,
  ButtonCancel,
} from './styles';

export function PatientsCategory() {
  const theme = useTheme();
  const navigation = useNavigation();
  const router = useRoute();

  const [observation, setObservation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {img, patient_id, name, register} = router.params as IPatientProps;

  /**
   * SAVE A PICTURE OF A PATIENT
   */
  const handlePhotoPatients = async () => {
    setIsLoading(!isLoading);
    const photos: IPhotoProps | any = {
      uri: `file:${img.replace('file:', '')}`,
      type: 'image/jpeg',
      name: 'photo.jpg',
    };
    const data = new FormData();
    data.append('file', photos);
    data.append('paciente_id', patient_id);
    data.append('observacao', observation);

    const key = '@login_user';
    const token = await AsyncStorage.getItem(key);
    const tokenTransform: IResponseToken = JSON.parse(token as any);

    if (tokenTransform.token) {
      await uploadPatientsPhoto(data, tokenTransform.token)
        .then(_responseUpload => {
          setIsLoading(false);
          register
            ? navigation.navigate('Authentication')
            : navigation.navigate('PatientsInfo', {
                patient_id: patient_id,
                name: name,
              });
        })
        .catch(error => console.error('Error in save photo google', error));
    }
  };

  return (
    <Wrapper>
      <WrapperImage>
        <Image
          source={{
            uri: `file:${img.replace('file:', '')}`
              ? `file:${img.replace('file:', '')}`
              : `file:${img.replace('file:', '')}`,
          }}
        />
      </WrapperImage>

      <WrapperSelect>
        {/* COMPONETE FOI ESTA INATIVO ATÉ O MOMENTO */}
        {/* <ModalSelectCategory
          isModalCancel={showModal}
          onIsModalCancel={()=> setShowModal(true)}
        /> */}

        <Input
          width="100%"
          height="80px"
          color={theme.colors.brand_secondary}
          placeholder="Observações"
          placeholderTextColor={theme.colors.brand_gray_150}
          onChangeText={text => setObservation(text)}
        />
      </WrapperSelect>

      <WrapperButton>
        <Button
          onPress={() => {
            handlePhotoPatients();
          }}
          width="100%"
          height="52px"
          background_color={theme.colors.brand_primary}>
          {isLoading ? (
            <Load color={theme.colors.brand_white} small={30} />
          ) : (
            <TitleButton>Salvar foto</TitleButton>
          )}
        </Button>
        <ButtonCancel
          onPress={() => {
            navigation.goBack();
          }}>
          <SubTitleButton>Cancelar</SubTitleButton>
        </ButtonCancel>
      </WrapperButton>
    </Wrapper>
  );
}
