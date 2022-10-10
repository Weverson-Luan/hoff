import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";

//components
import { ZoomImage } from "../../components/ZoomImage";
import { ModalOptions } from "../ModalOptions";

//assets
import Group from "../../assets/group.svg";

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
  TitleAnalysis
 } from "./style";


export function CardGallery({data, patient_id}: any){
  const theme = useTheme();
  const navigation = useNavigation();
  const [openModal, setModal] = useState(false);
  const prop = false;
  
  return(
    <Wrapper>
      {
        openModal &&
      <ModalOptions query_id={data.id}/>
      }
        <WrapperDesc>
          <WrapperLeft>
            <TitleDate>
              { data.data_hora_br}
            </TitleDate>

            <View style={{
              height: 24,
              borderWidth: 1,
              borderColor: theme.colors.brand_gray_200,
              marginLeft: 6
            }}/>

           
             {data.fotos.length < 9 ?
              <>
               <TitlePhotos> 0{data.fotos.length} Fotos</TitlePhotos>
              </>
              :
              <>
                <TitlePhotos> {data.fotos.length} Fotos</TitlePhotos>
              </>
               } 
            
          </WrapperLeft>
          <ButtonGroup>
       
              <Group 
                width={24} 
                height={24} 
                style={{marginRight:70}}
                onPress={()=> {
                  setModal(!openModal)
                
                }}
              />
          </ButtonGroup>
       
        </WrapperDesc>
        <WrapperText>
          <Button 
            onPress={()=> navigation.navigate("Watch", {
              patient_id: patient_id
            })}
          >
            <TitleWatch>Observações</TitleWatch>
          </Button>


           <Button
             onPress={()=> navigation.navigate("Analyze", {
               patient_id: patient_id,
               patientQuery: data.id
             })}
           >
             <TitleAnalysis>Análise</TitleAnalysis>
           </Button>
        </WrapperText>
  
       
        <WrapperImage>  
             {
               data.fotos.map((patient)=> (
                <ZoomImage
                    key={parseInt(patient.id)}
                  uri={ patient?.link_file}
                />
               ))
             }    
        </WrapperImage>  
          
       
    </Wrapper>
  )
}