import * as React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//axios
import axios from 'axios';

//assets
import PatientSVG from '../assets/patient.svg';
import PatientSelectSVG from '../assets/patient-select.svg';
import ClockSVG from '../assets/clock.svg';
import ClockSelectSVG from '../assets/clock-select.svg';
import HelpSVG from '../assets/help.svg';
import SearchSVG from '../assets/search.svg';
import FilterSVG from '../assets/filter.svg';
import ArrowLeftSVG from '../assets/arrow-left.svg';

//screens
import {Patients} from '../screens/BottomTabs/Patients';
import {Account} from '../screens/BottomTabs/Account';
import {Protected} from '../screens/BottomTabs/Protected';
// import {Text} from 'native-base';
import {getUsersInfo} from '../services/users';
import {formatString} from '../utils/format-string';

const BottomTabNavigator = createBottomTabNavigator();

export function BottomTabsNavigation({navigation}: any) {
  const theme = useTheme();

  const [image, setImage] = React.useState('');
  const [_dataGoogle, setDataGoogle] = React.useState<IUser>({} as IUser);
  React.useEffect(() => {
    const handleUserIsLogged = async () => {
      const key = '@login_user';
      const user_key = '@data_user';
      const token = await AsyncStorage.getItem(key);

      const tokenTransform: any = JSON.parse(token as string);

      getUsersInfo(tokenTransform?.token)
        .then(response => {
          setImage(response.data.data[0].imagem);
          const transformDate = JSON.stringify(response.data);
          AsyncStorage.setItem(user_key, transformDate);
        })
        .catch(error => {
          const handleTokenGoogleUser = async () => {
            const key = '@user_account'; // key save user google
            const user_key = '@data_user'; // key data save user google
            const token = await AsyncStorage.getItem(key);

            const tokenTransform = JSON.parse(token as string);
            const tokenFormat = formatString(tokenTransform);

            /**
             * BUSCA NA API GOOGLE-CLOUD-PLATFORM
             */
            await axios
              .get(
                `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${tokenFormat}`,
              )
              .then(async response => {
                setDataGoogle(response.data);
                const result_user = JSON.stringify(response.data);

                return await AsyncStorage.setItem(user_key, result_user);
              })
              .catch(error => console.error('error serch user-google', error));
          };
          handleTokenGoogleUser();
          console.error('error in list user', error);
        });
      return tokenTransform;
    };

    handleUserIsLogged();
  }, []);

  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        headerShadowVisible: true,
        headerTintColor: theme.colors.brand_primary,
        headerTitleStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.brand_gray_200,
          height: 60,
          borderColor: theme.colors.brand_gray_200,
          borderWidth: 1,
          borderTopColor: theme.colors.brand_gray_200,
        },
      }}>
      <BottomTabNavigator.Screen
        name=" Pacientes"
        component={Patients}
        options={{
          headerShown: false,
          title: 'll',
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 19,
                width: '100%',
              }}>
              <HelpSVG width={22} height={22} />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 19,
                width: '70%',
              }}>
              <FilterSVG width={22} height={22} />
              <TouchableOpacity>
                <SearchSVG width={22} height={22} />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <>
              {focused ? (
                <PatientSelectSVG width={22} height={22} />
              ) : (
                <PatientSVG width={22} height={22} />
              )}
            </>
          ),
          tabBarLabel: ({color, focused, position}) => (
            <Text
              style={{
                color: focused
                  ? theme.colors.brand_primary
                  : theme.colors.brand_white,
              }}>
              Pacientes
            </Text>
          ),
          tabBarActiveTintColor: theme.colors.brand_white,
          tabBarLabelStyle: {
            color: theme.colors.brand_white,
            fontSize: 12,
            marginBottom: 8,
          },
        }}
      />

      <BottomTabNavigator.Screen
        name="Protected"
        component={Protected}
        options={{
          title: 'Proteção',
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          tabBarIcon: ({color, size, focused}) => (
            <>
              {focused ? (
                <ClockSelectSVG
                  width={36}
                  height={26}
                  color={
                    focused
                      ? theme.colors.brand_primary
                      : theme.colors.brand_white
                  }
                />
              ) : (
                <ClockSVG
                  width={36}
                  height={26}
                  color={
                    focused
                      ? theme.colors.brand_primary
                      : theme.colors.brand_white
                  }
                />
              )}
            </>
          ),
          tabBarLabel: ({color, focused, position}) => (
            <Text
              style={{
                color: focused
                  ? theme.colors.brand_primary
                  : theme.colors.brand_white,
              }}>
              Proteção
            </Text>
          ),
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            color: 'red',
            fontSize: 12,
            marginBottom: 8,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginLeft: 24}}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <BottomTabNavigator.Screen
        name="Conta"
        component={Account}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: 30, height: 30, borderRadius: 50}}
              source={{
                uri: image
                  ? image
                  : 'https://api-hof.worktabsystems.com.br/images/default.jpeg',
              }}
            />
          ),
          tabBarLabel: ({color, focused, position}) => (
            <Text
              style={{
                color: focused
                  ? theme.colors.brand_primary
                  : theme.colors.brand_white,
              }}>
              Conta
            </Text>
          ),
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          tabBarActiveTintColor: theme.colors.brand_white,
          tabBarLabelStyle: {
            color: theme.colors.brand_white,
            fontSize: 12,
            marginBottom: 8,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginLeft: 24}}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}
