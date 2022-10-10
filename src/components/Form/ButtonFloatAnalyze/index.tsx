import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
//assets
import CameraOutlineSVG from "../../../assets/camera-outline.svg";

import { ButtonIconFloat } from "./styles";


interface IButtonFloatProps extends TouchableOpacityProps {
   
}
export function ButtonFloatAnalyze({...res}:IButtonFloatProps) {
  return (
 
     <ButtonIconFloat
      {...res}
     >
        <CameraOutlineSVG width={32} height={32}/>
     </ButtonIconFloat>
  
  );
}
