/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Alert, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import {CardPatients} from '../../../components/CardPatients';
import {ButtonFloatUser} from '../../../components/Form/ButtonFloatUser';
import {Load} from '../../../components/Load';

//dto
import {IResponseToken} from '../../../dtos/token';
import {IPatients} from '../../../dtos/patients';

//services
import {handlePatientsSearch} from '../../../services/patients/patients';
import {HeaderPatientBottomTabs} from '../../../components/HeaderPatientBottomTabs';

//styles
import {Wrapper, WrapperFloat, Input} from './styles';

export function Patients() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [data, setData] = useState<IPatients>({} as IPatients);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState('');
  const [visibly, setVisibly] = useState(true);

  const handleSearchPatient = async () => {
    const token = await AsyncStorage.getItem('@login_user');
    const tokenTransform: IResponseToken = JSON.parse(token as any);

    try {
      handlePatientsSearch(tokenTransform.token, name).then(
        responsePatientSearch => {
          setData(responsePatientSearch.data);
        },
      );
    } catch (error) {
      Alert.alert(
        'Não foi possivel buscar por usuario',
        'Feche o app e tente novamente.',
      );
    }
  };

  const handleGetAllPatients = async (name: string) => {
    const token = await AsyncStorage.getItem('@login_user');
    if (token) {
      const tokenTransform: IResponseToken = JSON.parse(token);
      await handlePatientsSearch(tokenTransform.token, name)
        .then(response => {
          setData(response.data);
          setIsLoading(!isLoading);
          setIsLoaded(true);
        })
        .catch(error => {
          console.error('error list patients of users', error);
        });
    }
  };

  /**
   * SEARCH ALL PATIENTS
   */
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGetAllPatients(name);
    }
    return () => {
      isMounted = false;
    };
  }, [data.data]);

  return (
    <Wrapper>
      {!isLoaded ? (
        <Load color={theme.colors.brand_primary} small={30} />
      ) : (
        <>
          <HeaderPatientBottomTabs
            title="Pacientes"
            name={name}
            visibly={visibly}
            onPress={() => (name ? Alert.alert('kkk') : setVisibly(!visibly))}>
            {visibly ? null : (
              <Input
                placeholder="Pesquise por um paciente"
                placeholderTextColor={'#fff'}
                onChangeText={(text: React.SetStateAction<string>) =>
                  setName(text)
                }
              />
            )}
          </HeaderPatientBottomTabs>
          <FlatList
            data={data.data}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <CardPatients data={item} />}
          />

          <WrapperFloat>
            <ButtonFloatUser
              onPress={() =>
                navigation.navigate('NewPatients', {
                  patient_id: 4,
                })
              }
            />
          </WrapperFloat>
        </>
      )}
    </Wrapper>
  );
}
