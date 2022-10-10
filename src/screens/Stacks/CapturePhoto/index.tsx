import React, {useEffect, useState, useRef, useCallback} from 'react';
import {useTheme} from 'styled-components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {checkMultiple} from 'react-native-permissions';
import {
  View,
  StyleSheet,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {
  Camera,
  useCameraDevices,
  CameraPermissionStatus,
  CameraDevice,
} from 'react-native-vision-camera';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//assets
import PersonaSVG from '../../../assets/persona.svg';
import MonotoneVG from '../../../assets/monotone.svg';
import CircleSVG from '../../../assets/circle.svg';
import ShadowsSVG from '../../../assets/shadows.svg';
import IconTypeSVG from '../../../assets/icon-type.svg';
import IconRectangleSVG from '../../../assets/rectangle.svg';
import IconRectangle2SVG from '../../../assets/rectangle2.svg';
import ButtonSVG from '../../../assets/button.svg';
import ClosedVG from '../../../assets/closed.svg';
import FilterFirstImg from '../../../assets/filter-first.png';
import FilterLastImg from '../../../assets/filter-last.png';

//typings
import {PictureImageProps} from './index.d';

import {Load} from '../../../components/Load';
import {IResponseToken} from '../../../dtos/token';
import {handleCreatePhotoCollage} from '../../../services/patients/patients';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';

//styled-components
import {
  Wrapper,
  WrapperImage,
  WrapperClosed,
  ButtonClosed,
  Image,
  ImageFilter,
  WrapperPosition,
  TitlePosition,
  Box,
  WrapperIcon,
  TitleIcon,
  WrapperType,
  Button,
  TitleType,
  WrapperIconType,
  ButtonFilter,
  WrapperPositionFace,
  TitlePositionFace,
  WrapperIconPositionFace,
  WrapperLoad,
  WrapperButton,
  ButtonCapture,
} from './styles';

export function CapturePhoto() {
  const theme = useTheme();
  const navigation = useNavigation();
  const {params} = useRoute();
  const CameraRef = useRef<Camera>(null);
  let {patient_id, patient_query, name, register, img, position} =
    params as PictureImageProps;
  const [image, setImage] = useState<string>('');
  const [filter, setFilter] = useState<null | string>(null); //filter image.
  const [filter1, setFilter1] = useState<null | string>(null); //filter image.
  const [initValue, setInitValue] = useState(true); //value initial.
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [cameraPosition, setCameraPosition] = useState<boolean>(false);

  const [positionFace, setPositionFace] = useState<null | number>(null); //camera position face.
  const [positionOne, setPositionOne] = useState<null | boolean>(null);
  const [positionTwo, setPositionTwo] = useState<null | boolean>(null);
  const [positionThree, setPositionThree] = useState<null | boolean>(null);
  const [collageProgress, setCollageProgress] = useState<boolean>(false);

  const [cameraPermissionStatus, setCameraPermissionStatus] = useState<
    boolean | null
  >();
  const [cameraPermissionGallery, setCameraPermissionGallery] = useState<
    boolean | null
  >();

  const requestCameraPermission = useCallback(async () => {
    try {
      const userPermission = [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ] as any;

      checkMultiple(userPermission).then(response => {
        return response;
      });

      const status = await PermissionsAndroid.requestMultiple(userPermission);
      setCameraPermissionStatus(
        status['android.permission.CAMERA'] === 'granted',
      );
      setCameraPermissionGallery(
        status['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted',
      );
    } catch (error) {
      Alert.alert(
        'Error em pedir permissões',
        'Error em pedir permissões. Por favor tente refazer o processo e aceitar as permissões necessárias.  ',
      );
    }
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const devices = useCameraDevices();
  const device = cameraPosition ? devices.front : devices.back;
  const supportsFlash = device?.hasFlash ?? false;

  if (device == null) {
    return <View />;
  }

  /**
   * CAPTURE ONE PHOTO
   */
  const takePictureAsync = async () => {
    if (CameraRef) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
        flash: supportsFlash ? flash : 'off',
      };
      const result = await CameraRef?.current?.takePhoto(options);
      console.log("IMAGE ENVIADA", result)
      CameraRoll.save(String(result?.path), {type: 'photo'});
      setImage(String(result?.path));
      if (position) {
        setCollageProgress(true);
        const photos: any = {
          uri: `file:${img ? img: result?.path}`,
          type: 'image/jpeg',
          name: 'photo.jpg',
        };
        const data = new FormData() as any;
        data.append('file', photos);
        data.append('consulta_id', patient_query);
        data.append('posicao', position);
        const key = '@login_user';
        const token = await AsyncStorage.getItem(key);
        const tokenTransform: IResponseToken = JSON.parse(token as string);
        console.log("DATA ENVIADA", data)
        console.log("IMAGE ENVIADA", img)
        handleCreatePhotoCollage(data, tokenTransform.token)
          .then((_responseCollage: any) => {
            setCollageProgress(false);
            return navigation.navigate('Analyze', {
              patient_id,
              patientQuery: patient_query,
            });
          })
          .catch(_error => {
            return Alert.alert(
              'Colagem de fotos',
              'Error em fazer a criação de uma colagem para um usuário !',
            );
          });
        return;
      }
      return navigation.navigate('PatientsCategory', {
        img: result?.path,
        patient_id,
        name,
        register,
      });
    }
  };

  /**
   *  FILTER CAMERA
   */
  const handleFilter = (filter: any) => {
    if (filter === 'filter') {
      setFilter('filter');
      setFilter1('');
      setInitValue(false);
    } else {
      setFilter1('filter1');
      setFilter('');
      setInitValue(false);
    }
  };

  /**
   *
   * GET POSITION CAMERA
   */
  const handleClearPosition = (position: number) => {
    if (position === 1) {
      setPositionFace(1);
      setPositionOne(!positionOne);
      setPositionTwo(false);
      setPositionThree(false);
    }
    if (position === 2) {
      setPositionFace(2);
      setPositionTwo(!positionTwo);
      setPositionOne(false);
      setPositionThree(false);
    }
    if (position === 3) {
      setPositionFace(3);
      setPositionThree(!positionThree);
      setPositionOne(false);
      setPositionTwo(false);
    }
  };

  /**
   * UseEffect
   */

  /**
   * PERMISSION CAMERA
   */

  return (
    <>
      <Wrapper>
        <WrapperImage>
          {collageProgress ? (
            <WrapperLoad>
              <Load color={theme.colors.brand_primary} small={30} />
            </WrapperLoad>
          ) : (
            <WrapperImage>
              <>
                {image ? (
                  <WrapperClosed>
                    <Image
                      source={{
                        uri: `file:${image}`,
                      }}
                    />
                  </WrapperClosed>
                ) : (
                  <>
                    {cameraPermissionStatus && (
                      <Camera
                        ref={CameraRef}
                        photo={true}
                        style={StyleSheet.absoluteFill}
                        device={device as CameraDevice}
                        isActive={true}
                      />
                    )}
                  </>
                )}
              </>
            </WrapperImage>
          )}
        </WrapperImage>

        <WrapperPosition>
          <Box>
            <PersonaSVG width={48} height={48} />
            <TitlePosition>Posicionamento frontal</TitlePosition>
          </Box>

          <WrapperIcon onPress={() => setCameraPosition(!cameraPosition)}>
            <CircleSVG width={20} height={20} />
            <TitleIcon>1</TitleIcon>
          </WrapperIcon>

          <WrapperIcon onPress={() => setFlash('on')}>
            <MonotoneVG width={20} height={20} />
            <TitleIcon>0</TitleIcon>
          </WrapperIcon>

          <WrapperIcon>
            <ShadowsSVG width={20} height={20} />
            <TitleIcon>0</TitleIcon>
          </WrapperIcon>
        </WrapperPosition>

        <WrapperType>
          <TitleType>Tipos</TitleType>

          <WrapperIconType>
            <ButtonFilter
              isSelect={initValue}
              onPress={() => {
                setFilter(null);
                setFilter1(null);
                setInitValue(!initValue);
              }}>
              <IconRectangleSVG width={38} height={40} />
            </ButtonFilter>

            <ButtonFilter
              isSelect={!!filter}
              onPress={() => handleFilter('filter')}>
              <IconRectangle2SVG width={40} height={40} />
            </ButtonFilter>

            <ButtonFilter
              isSelect={!!filter1}
              onPress={() => handleFilter('filter1')}>
              <IconTypeSVG width={40} height={40} />
            </ButtonFilter>
          </WrapperIconType>
        </WrapperType>

        <WrapperPositionFace>
          <TitlePositionFace>Posicionamento do rosto</TitlePositionFace>

          <WrapperIconPositionFace>
            <Button
              isSelect={positionOne}
              onPress={() => {
                handleClearPosition(1);
              }}>
              <PersonaSVG width={38} height={40} />
            </Button>

            <Button
              isSelect={positionTwo}
              onPress={() => {
                handleClearPosition(2);
              }}>
              <PersonaSVG width={38} height={40} />
            </Button>

            <Button
              isSelect={positionThree}
              onPress={() => {
                handleClearPosition(3);
              }}>
              <PersonaSVG width={38} height={40} />
            </Button>
          </WrapperIconPositionFace>
        </WrapperPositionFace>

        {/**dESABILITADO */}

        {/* <WrapperPositionFace>
        <TitlePositionFace>Tricologia</TitlePositionFace>

        <WrapperIconPositionFace>
          <Button>
            <PersonaSVG width={38} height={40}/>
          </Button>
          <PersonaSVG width={40} height={40}/>
          <PersonaSVG width={40} height={40}/>
          <PersonaSVG width={40} height={40}/>
          <PersonaSVG width={40} height={40}/>
        </WrapperIconPositionFace>
      </WrapperPositionFace> */}

        {cameraPermissionStatus && (
          <WrapperButton>
            <ButtonCapture
              onPress={() => {
                takePictureAsync();
              }}>
              <ButtonSVG width={128} height={90} />
            </ButtonCapture>
          </WrapperButton>
        )}
        <ButtonClosed
          onPress={() => {
            // setPhotoCaptured(null);
            navigation.goBack();
          }}>
          <ClosedVG width={32} height={32} />
        </ButtonClosed>
      </Wrapper>
    </>
  );
}
