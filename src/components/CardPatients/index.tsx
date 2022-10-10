import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//types routings
import { StackParamsList } from "../../routes/routes.types";

//styled-components
import { 
  Wrapper,
  WrapperInfo,
  WrapperImage,
  ImagePatient,
  WrapperDesc,
  TitleName,
  TitleDate,
  TitlePhoto,
} from "./styles";

//route types
type CardPatientsProps =   NativeStackNavigationProp<StackParamsList, "PatientsInfo">;

export function CardPatients({data}: any){
  const navigation = useNavigation<CardPatientsProps>();
  return(
    <Wrapper>
      <WrapperInfo 
        onPress={()=> navigation.navigate("PatientsInfo", { 
          patient_id: data.id,
          name: data.nome,
        })}
      >
        <WrapperImage>
          <ImagePatient 
            source={{ uri: data?.foto_link}}
          />
           <WrapperDesc>
            <TitleName>{data?.nome}</TitleName>
            <TitleDate>Última atualização em {data?.ultima_atualizacao} </TitleDate>
          </WrapperDesc>
         
        </WrapperImage>

        <TitlePhoto> {data.qtd_fotos < 10 ?`0${data.qtd_fotos}` : data.qtd_fotos } Fotos</TitlePhoto>
      </WrapperInfo>
    </Wrapper>
  )
}