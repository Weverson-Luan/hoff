import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
//assets
import PhotoSVG from "../../../assets/user-plus.svg";

import { ButtonIconFloat } from "./styles";


interface IButtonFloatProps extends TouchableOpacityProps {
   
}
export function ButtonFloatUser({...res}:IButtonFloatProps) {
  return (
 
     <ButtonIconFloat
      {...res}
     >
        <PhotoSVG width={32} height={32}/>
     </ButtonIconFloat>
  
  );
}
