import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {TouchableOpacity, View, Alert} from 'react-native';
import {useTheme} from 'styled-components';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

//assets
import Group from '../../assets/group.svg';

//components
import {ModalOptions} from '../ModalOptions';
import {Alert as AlertCardGallery} from '../../common/Alert/alert';

//typings
import {IResponseToken} from '../../dtos/token';
import {handleCreatePhotoCollage} from '../../services/patients/patients';
import {IGalleryCollageProps, IFileProps} from './index.d';

//styled-components
import {
  Wrapper,
  WrapperDesc,
  ButtonGroup,
  WrapperLeft,
  TitleDate,
  TitlePhotos,
  TitleWatch,
  WrapperText,
  Button,
  WrapperImage,
  Image,
  TitleAnalysis,
} from './style';
import colors from 'native-base/lib/typescript/theme/v33x-theme/base/colors';

export function CardGalleryCollage({
  data,
  patient_id,
  patient_query,
  position,
}: IGalleryCollageProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  const [openModal, setModal] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const [createCollage, setCreateCollage] = useState(false);
  const [uri, setUri] = useState<string | undefined>('');

  const handleSelectQuery = async (file: string) => {
    setUri(file);
    setIsModalAlert(!isModalAlert);
  };

  const handleCreateCollage = async (cropper?: string) => {
    setCreateCollage(true);
    const photos: IFileProps = {
      uri: cropper ? cropper : uri,
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
    handleCreatePhotoCollage(data, tokenTransform.token)
      .then(_responseCollage => {
        setIsModalAlert(!isModalAlert);
        return navigation.navigate('Analyze', {
          patient_id,
          patientQuery: patient_query,
        });
      })
      .catch(_error => {
        setCreateCollage(!createCollage);
        return Alert.alert(
          'Colagem de fotos',
          'Error em fazer a criação de uma colagem para um usuário !',
        );
      });
  };

  const pickPicture = () => {
    ImagePicker.openCropper({
      path: uri ? uri : '',
      width: 300,
      height: 400,
      mediaType: 'photo',
      freeStyleCropEnabled: true,
      cropperStatusBarColor: theme.colors.brand_secondary,
      cropperToolbarColor: theme.colors.brand_secondary,
      cropperToolbarWidgetColor: theme.colors.brand_primary,
    }).then(image => {
      handleCreateCollage(image.path);
      console.log(image);
    });
  };
  return (
    <Wrapper>
      {openModal && <ModalOptions query_id={data.id} />}

      {isModalAlert && (
        <AlertCardGallery
          loading={createCollage}
          onPress={() => {
            setCreateCollage(true);
            pickPicture();
          }}
        />
      )}

      <WrapperDesc>
        <WrapperLeft>
          <TitleDate>{data.data_hora_br}</TitleDate>

          <View
            style={{
              height: 24,
              borderWidth: 1,
              borderColor: theme.colors.brand_gray_200,
              marginLeft: 6,
            }}
          />

          {data.fotos.length < 9 ? (
            <>
              <TitlePhotos> 0{data.fotos.length} Fotos</TitlePhotos>
            </>
          ) : (
            <>
              <TitlePhotos> {data.fotos.length} Fotos</TitlePhotos>
            </>
          )}
        </WrapperLeft>
        <ButtonGroup>
          <Group
            width={24}
            height={24}
            style={{marginRight: 70}}
            onPress={() => {
              setModal(!openModal);
            }}
          />
        </ButtonGroup>
      </WrapperDesc>

      <WrapperText>
        <Button
          onPress={() =>
            navigation.navigate('Watch', {
              patient_id: patient_id,
            })
          }>
          <TitleWatch>Observações</TitleWatch>
        </Button>

        <Button
          onPress={() =>
            navigation.navigate('Analyze', {
              patient_id: patient_id,
              patientQuery: data.id,
            })
          }>
          <TitleAnalysis>Análise</TitleAnalysis>
        </Button>
      </WrapperText>

      <WrapperImage>
        {data.fotos.map(patient => (
          <TouchableOpacity
            key={parseInt(patient.id)}
            onPress={() => {
              handleSelectQuery(patient?.link_file);
            }}>
            <Image
              source={{
                uri: patient?.link_file
                  ? patient.link_file
                  : 'https://api-hof.worktabsystems.com.br/images/default.jpeg',
              }}
            />
          </TouchableOpacity>
        ))}
      </WrapperImage>
    </Wrapper>
  );
}
