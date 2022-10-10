import React from "react";
import { SvgProps  } from "react-native-svg";

//styles-components
import {
   Wrapper,
   SubTitleNewPhoto,
   WrapperCard,
   TitleNewPhoto,
   } from "./styles";
import { TouchableOpacityProps, View } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
   title: string;
   subTitle: string;
   icon: React.FC<SvgProps>;
   iconSVG: React.FC<SvgProps>;
};
export function CardNewPhotos({title, subTitle,icon: Icon, iconSVG: IconSVG,...res}: ButtonProps) {
  return (
 
     <Wrapper {...res} > 
        <View>
         <WrapperCard>
               <IconSVG width={22} height={22}/>
               <TitleNewPhoto>{title}</TitleNewPhoto>
            </WrapperCard>
            <WrapperCard>
               <SubTitleNewPhoto>{subTitle}</SubTitleNewPhoto>  
            </WrapperCard>
        </View>
        <Icon width={70} height={70} />
     </Wrapper>
  
  );
}
