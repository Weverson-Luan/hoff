/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';
// import * as ImagePicker from 'expo-image-picker';
import {PickerImage} from '../../../utils/select-picker-image';

//assets
import {CardNewAnalyze} from '../../../components/CardNewAnalyze';
//assets
import GallerySVG from '../../../assets/gallery.svg';
import UploadSVG from '../../../assets/camera-upload.svg';

//styles-components
import {Wrapper, WrapperBox, WrapperButton, Title} from './styles';

import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Button} from '../../../components/Form/Button';
import {TitleButton} from '../NewPatients/styles';

interface IParams {
  patient_id: number;
}
export function NewAnalyze() {
  const navigation = useNavigation();
  const theme = useTheme();
  const id = useRoute();
  const {patient_id} = id.params as IParams;

  return (
    <>
      <Wrapper>
        <WrapperBox>
          <Title>Nova análise</Title>
        </WrapperBox>

        <CardNewAnalyze
          iconSVG={() => <GallerySVG width={22} height={22} />}
          title="Colagem"
          description="Comparação de fotos lado a lado"
          onPress={() => {}}
        />

        <CardNewAnalyze
          iconSVG={() => <UploadSVG width={22} height={22} />}
          title="Fantasma"
          description="Comparação de fotos lado a lado"
          onPress={() => {}}
        />
      </Wrapper>
      <WrapperButton>
        <Button
          onPress={() => Alert.alert('analise')}
          width="100%"
          height="56px"
          background_color={theme.colors.brand_primary}
          border>
          <TitleButton>Adicionar fotos</TitleButton>
        </Button>
        {/* COMPOENNT INATIVO */}
        {/* <ButtonSubTitle>
       <SubTitleButton>Salva sem adicionar fotos</SubTitleButton>
   </ButtonSubTitle> */}
      </WrapperButton>
    </>
  );
}
