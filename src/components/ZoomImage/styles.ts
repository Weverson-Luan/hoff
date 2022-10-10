import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ModalProps, Modal } from "react-native";
import { ImageProps } from "./index.d";

export const Container = styled.View`
`;
export const WrapperImage = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.brand_secondary};

`;
export const Image = styled.Image<ImageProps>`
  width: ${({analyze})=> analyze ? `${RFValue(56)}px` : `${RFValue(100)}px`};
  height: ${({analyze})=> analyze ? `${RFValue(120)}px` : `${RFValue(120)}px`};
  margin-bottom: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;

`;
export const ImageModal = styled(Modal)<ModalProps>`
  width: 100%;
  height: 100%;
`;
export const HeaderModal = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-items: flex-end;  
  background-color: ${({theme})=> theme.colors.brand_secondary};
  padding: 12px;

`;
export const TitleWatch = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme})=> theme.colors.brand_white};
  margin-left: ${RFValue(10)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme})=> theme.colors.brand_white};
`;
export const WrapperTitle = styled.Text`
`;