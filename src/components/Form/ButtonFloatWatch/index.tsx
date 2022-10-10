import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
//assets
import PencilCircleSVG from "../../../assets/pencil-circle.svg";

import { ButtonIconFloat } from "./styles";


interface IButtonFloatProps extends TouchableOpacityProps {
   
}
export function ButtonFloatWatch({...res}:IButtonFloatProps) {
  return (
 
     <ButtonIconFloat
      {...res}
     >
        <PencilCircleSVG width={32} height={32}/>
     </ButtonIconFloat>
  
  );
}
