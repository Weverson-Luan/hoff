/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useNavigation, useRoute} from '@react-navigation/native';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import {Button} from '../../../components/Form/Button';
import {ButtonFloatAnalyze} from '../../../components/Form/ButtonFloatAnalyze';
import {CardGalleryAnalyze} from '../../../components/CardGalleryAnalyze';

//typings
import {ICollageProps, IParams} from './index.d';
import {IResponseToken} from '../../../dtos/token';

//services
import {handlePhotoCollage} from '../../../services/patients/patients';

//styled-components
import {
  Wrapper,
  WrapperButton,
  Title,
  TitleFacial,
  WrapperFloat,
} from './styles';

export function Analyze() {
  const theme = useTheme();
  const navigation = useNavigation();
  const id = useRoute();
  const {patient_id, patientQuery} = id.params as IParams;
  const [collage, setCollage] = useState<ICollageProps[]>();

  const data = {
    patient_id,
    patientQuery,
  };

  /**
   * UseEffect
   */
  useEffect(() => {
    const getPhotoCollage = async () => {
      const key = '@login_user';
      const token = await AsyncStorage.getItem(key);
      const tokenTransform: IResponseToken = JSON.parse(token as any);

      try {
        const response = await handlePhotoCollage(
          patientQuery,
          tokenTransform.token,
        );
        setCollage(response.data.data);
      } catch (error) {
        console.log('ERROR', error);
      }
    };

    getPhotoCollage();
  }, [collage]);

  return (
    <Wrapper>
      <WrapperButton>
        <Button
          style={{
            borderWidth: 1,
            borderColor: theme.colors.brand_white,
          }}
          width="76px"
          height="32px"
          background_color={theme.colors.brand_primary}
          border>
          <Title>Todas</Title>
        </Button>
        {/* <Button
              style={{
                marginLeft: 8,
                borderWidth: 1,
                borderColor: theme.colors.brand_white
              }}
              width="120px"
              height="32px"
              background_color={theme.colors.brand_secondary}
              border
          >
            <TitleFacial>Colagem</TitleFacial>
      </Button>

        <Button
          style={{
            marginLeft: 8,
            borderWidth: 1,
            borderColor: theme.colors.brand_white
          }}
          width="100px"
          height="32px"
          background_color={theme.colors.brand_secondary}
          border
        >
          <TitleFacial>Fantasma</TitleFacial>
        </Button> */}
      </WrapperButton>

      <CardGalleryAnalyze collage={collage} data={data} />

      {/* <WrapperFloat>
      <ButtonFloatAnalyze
        onPress={()=> navigation.navigate("NewAnalyze", {
          patient_id: patient_id
        })}
      />
      </WrapperFloat> */}
    </Wrapper>
  );
}
