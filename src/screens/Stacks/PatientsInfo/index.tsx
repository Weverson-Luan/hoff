/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation, useRoute} from '@react-navigation/native';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import {CardGallery} from '../../../components/CardGallery';
import {Button} from '../../../components/Form/Button';
import {ButtonFloat} from '../../../components/Form/ButtonFloat';
import {Load} from '../../../components/Load';
import {HeaderPatientInfo} from '../../../components/HeaderPatientInfo';

//typings
import {IResponseToken} from '../../../dtos/token';
import {IPatientsInfo} from '../../../dtos/patients-info';
import {IParams} from './index.d';

//services
import {
  getPatientsInfo,
  handleExcludePatients,
} from '../../../services/patients/patients';

//styled-components
import {
  Wrapper,
  WrapperButton,
  Title,
  TitleFacial,
  WrapperFloat,
} from './styles';

export function PatientsInfo() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const {patient_id, name} = route?.params as IParams;
  const [patients, setPatients] = useState<IPatientsInfo>();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * EXCLUDE ONE PATIENTS
   */
  const handleExcludePatient = async () => {
    const key = '@login_user';
    const token = await AsyncStorage.getItem(key);
    const tokenTransform: IResponseToken = JSON.parse(token as any);
    Alert.alert(
      'Exclusão de paciente',
      'Tem certeza que deseja excluir esse paciente?',
      [
        {
          text: 'Cancel',
          onPress: () =>
            navigation.navigate('PatientsInfo', {
              name: name,
              patient_id: patient_id,
            }),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            handleExcludePatients(patient_id, String(tokenTransform.token))
              .then(() => {
                navigation.navigate('Authentication');
              })
              .catch(error => navigation.navigate('PatientsInfo', {}));
          },
        },
      ],
    );
  };

  const handlePatientInfo = async () => {
    const token = await AsyncStorage.getItem('@login_user');

    /**
     * IF USER IS LOGGED IN WITH THEIR ACCOUNT CREATED BY THE APP
     */
    if (token) {
      const tokenTransform: IResponseToken = JSON.parse(token);
      await getPatientsInfo(patient_id, tokenTransform.token)
        .then(responsePatients => {
          setPatients(responsePatients.data.data);
          setIsLoading(false);
          return;
        })
        .catch(error => console.error('Error listing patients info', error));
    }
  };
  /**
   * UseEffect
   */
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handlePatientInfo();
    }
    return () => {
      isMounted = false;
    }; //disassembling component
  }, [patients?.consultas]);

  return (
    <Wrapper>
      {isLoading ? (
        <Load color={theme.colors.brand_primary} small={30} />
      ) : (
        <>
          <HeaderPatientInfo
            title={name}
            onPress={() => handleExcludePatient()}
          />

          <WrapperButton>
            <Button
              width="66px"
              height="32px"
              background_color={theme.colors.brand_primary}>
              <Title>Todas</Title>
            </Button>

            <Button
              style={{
                marginLeft: 8,
              }}
              width="76px"
              height="32px"
              background_color={theme.colors.brand_secondary}
              border>
              <TitleFacial>Facial</TitleFacial>
            </Button>
          </WrapperButton>

          <FlatList
            data={patients?.consultas}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <CardGallery data={item} patient_id={patient_id} />
            )}
          />

          <WrapperFloat>
            <ButtonFloat
              onPress={() => {
                navigation.navigate('NewPhotos', {
                  patient_id: patient_id,
                  name: name,
                  patientQuery: patients?.consultas?.map(
                    item => item?.fotos[0]?.consulta_id,
                  ),
                });
              }}
            />
          </WrapperFloat>
        </>
      )}
    </Wrapper>
  );
}
