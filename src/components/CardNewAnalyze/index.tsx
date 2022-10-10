//assets
import Gallery from "../../assets/gallery.svg";
import ArrowRightSVG from "../../assets/arrow-right.svg";

//styles-components
import {
   Wrapper,
   SubTitleNewPhoto,
   WrapperCard,
   TitleNewPhoto,
   } from "./styles";
import { TouchableOpacityProps, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface ButtonProps extends TouchableOpacityProps{
   title: string;
   description: string;
   iconSVG: React.FC<SvgProps>;
};
export function CardNewAnalyze({ title, description, iconSVG: IconSVG,...res}: ButtonProps) {
  return (
 
     <Wrapper {...res} > 
        <View style={{width: '75%'}}>
         <WrapperCard>
               <IconSVG width={22} height={22}/>
               <TitleNewPhoto>{title}</TitleNewPhoto>
            </WrapperCard>
            <WrapperCard>
               <SubTitleNewPhoto>{description}</SubTitleNewPhoto>  
            </WrapperCard>
        </View>
         <ArrowRightSVG width={22} height={22}/>
     </Wrapper>
  
  );
}
