import { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

//assets
import SearchSVG from "../../assets/search.svg";
import HelpSVG from "../../assets/help.svg";

//styled-components
import { 
  ContainerHeader,
  Content,
  TitleName,
  ButtonIcon,
} from "./styles";

interface HeaderPatientBottomTabsProps extends  TextInputProps{
  title?: string;
  onPress?: ()=> void;
  name: string;
  onPressName?: ()=> void;
  children: ReactNode;
  visibly: boolean;

};
export function HeaderPatientBottomTabs({ title, onPress, visibly, children }: HeaderPatientBottomTabsProps ){
  const navigation = useNavigation();
  return(
    <ContainerHeader search={visibly}>
      <Content>

       {
        visibly &&
      
        <>
           <ButtonIcon 
              onPress={()=> navigation.navigate("Authentication")}
          >
            <HelpSVG width={22} height={22}/>
          </ButtonIcon>

          <TitleName>{ title }</TitleName>
        </>
       
       }

       { children }
      
        <ButtonIcon
            onPress={onPress}
        >
        <SearchSVG width={22} height={22}/>
      </ButtonIcon>
      
      </Content>
    </ContainerHeader>
  )
} 