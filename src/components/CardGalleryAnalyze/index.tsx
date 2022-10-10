import React from "react";
import { useNavigation } from "@react-navigation/native";

//typings
import { ICollageProps } from "../../screens/Stacks/Analyze/index.d";
import { ICardGalleryAnalyzeProps } from "./index.d";

//styled-components
import { 
  Wrapper,
  WrapperDesc,
  WrapperCollage,
  CollageSquare,
  CollageRectangle,
  WrapperLeft,
  TitleDate,
  WrapperImage,
  Image,
  ImageVertical,
  Button,
  ButtonPositionOne
 } from "./style";
import { ZoomImageAnalyze } from "../ZoomImageAnalyze";

export function CardGalleryAnalyze({ collage, data }: ICardGalleryAnalyzeProps){
  const navigation = useNavigation();
  /**
   * 
   * GET POSITION
   */
  const handlePosition = (position: number) => {
    navigation.navigate("NewPhotosCollage", {
      patient_id: data.patient_id,
      patient_query: data.patientQuery,
      position: position
    });
  };
  
  /**
   * FILTER POSITION
   */
  const handleFilter = (position: number) => {    
    let cardDefault =     
    <ButtonPositionOne 
      image={false}
      onPress={()=> handlePosition(position)}
    >
    <TitleDate>+</TitleDate>
  </ButtonPositionOne> 
   collage?.map((item: ICollageProps) => {
      if (item.posicao == position) {
        cardDefault = (
          <ZoomImageAnalyze 
            uri={item.link_file}
            
          />
        )
      }
    })

    return cardDefault;
  };

  /**
   * FILTER POSITION RECTA
   */
  const handleFilterRecta = (position: number) => {
    let cardDefault =     
    <Button 
      image={false}
      onPress={()=> handlePosition(5)}
    >
   <TitleDate>+</TitleDate>
  </Button>
   collage?.map((item: ICollageProps, index) => {
      if (item.posicao == position) {
      
        cardDefault = (
          <ZoomImageAnalyze 
          analyze={true}
          uri={item.link_file}
          
        />
        )
      }
    })

    return cardDefault;

  };

 
  return(
    <Wrapper>
      <WrapperDesc>
        <TitleDate> {collage?.length < 10 ? <> 0{collage?.length} </> : collage?.length } Colagens </TitleDate>
      </WrapperDesc>
       <WrapperCollage>

        <CollageSquare>
        
        {
          
           handleFilter(1)
          
        }
        {
          
          handleFilter(2)
         
        }
        {
          
          handleFilter(3)
         
        }
        {
          
          handleFilter(4)
         
        }
        
          
        </CollageSquare>

        <CollageRectangle>
  
        {
          handleFilterRecta(5)
        }

        {
          handleFilterRecta(6)
        }
        
        {
          handleFilterRecta(7)
        }
        
        {
          handleFilterRecta(8)
        }  
  
        </CollageRectangle>   

        <CollageSquare>
          
        {
          
          handleFilter(9)
         
        }
        {
          
          handleFilter(10)
          
        }
        {
          
          handleFilter(11)
          
        }
        {
          
          handleFilter(12)
          
        }
          
        </CollageSquare>
        
        <CollageRectangle>
       
        {
          handleFilterRecta(13)
        }

        {
          handleFilterRecta(14)
        }
        
        {
          handleFilterRecta(15)
        }
        
        {
          handleFilterRecta(16)
        } 

        </CollageRectangle>   
       </WrapperCollage>
    </Wrapper>
  )
}