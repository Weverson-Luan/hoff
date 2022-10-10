import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
//assets
import PhotoSVG from "../../../assets/photo.svg";

import { ButtonIconFloat } from "./styles";


interface IButtonFloatProps extends TouchableOpacityProps {
   
}
export function ButtonFloat({...res}:IButtonFloatProps) {
  return (
 
     <ButtonIconFloat
      {...res}
     >
        <PhotoSVG width={32} height={32}/>
     </ButtonIconFloat>
  
  );
}
