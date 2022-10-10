import * as React from 'react';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//assets
import GroupSVG from '../assets/group.svg';
import ArrowLeftSVG from '../assets/arrow-left.svg';

//screens
import {SignIn} from '../screens/Stacks/SignIn';
import {Login} from '../screens/Stacks/Login';
import {NewPhotos} from '../screens/Stacks/NewPhotos';
import {Watch} from '../screens/Stacks/Watch';
import {PatientsCategory} from '../screens/Stacks/PatientsCategory';
import {Analyze} from '../screens/Stacks/Analyze';
import {NewAnalyze} from '../screens/Stacks/NewAnalyze';
import {Help} from '../screens/Stacks/Help';
import {NewPatients} from '../screens/Stacks/NewPatients';
import {PatientsInfo} from '../screens/Stacks/PatientsInfo';
import {CapturePhoto} from '../screens/Stacks/CapturePhoto';
import {Register} from '../screens/Stacks/Register';
import {NewPatientsInfo} from '../screens/Stacks/NewPatientsInfo';
import {NewPhotosCollage} from '../screens/Stacks/NewPhotosCollage';
import {PatientImageGallery} from '../screens/Stacks/PatientImageGallery';

//bottomTabs
import {BottomTabsNavigation} from '../routes/routes.bottomTabs';

//types routings
const Stack = createNativeStackNavigator();

export function StackNavigation({isLogged}: any) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      {!isLogged && (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}

      <Stack.Screen name="Authentication" component={BottomTabsNavigation} />

      <Stack.Screen
        name="PatientsInfo"
        component={PatientsInfo}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Roberta Pinheiro',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Authentication')}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
          headerRight: () => <GroupSVG width={22} height={22} />,
        }}
      />

      <Stack.Screen
        name="NewPhotos"
        component={NewPhotos}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Nova Foto',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Watch"
        component={Watch}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Observações',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="CapturePhoto"
        component={CapturePhoto}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'CapturePhoto',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="PatientsCategory"
        component={PatientsCategory}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Observações',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Analyze"
        component={Analyze}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Análise ',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="NewAnalyze"
        component={NewAnalyze}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Nova análise ',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Ajuda ',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="NewPatients"
        component={NewPatients}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Novo paciente ',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="NewPatientsInfo"
        component={NewPatientsInfo}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Pedro Gabriel',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="NewPhotosCollage"
        component={NewPhotosCollage}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Nova Colagem',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="PatientImageGallery"
        component={PatientImageGallery}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.brand_gray_200,
          },
          title: 'Roberta Pinheiro',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.brand_white,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Authentication')}>
              <ArrowLeftSVG width={22} height={22} />
            </TouchableOpacity>
          ),
          headerRight: () => <GroupSVG width={22} height={22} />,
        }}
      />
    </Stack.Navigator>
  );
}
