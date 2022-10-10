import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;



  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};
  /* padding: ${RFValue(16)}px; */
`;
export const WrapperDesc = styled.View`
 
  align-items: center;
  justify-content: center;

  background-color: ${({theme})=> theme.colors.brand_secondary};

  padding: ${RFValue(16)}px;

  flex-direction: row;
`;
export const Image = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
`;
export const TitleGeneral = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(16)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};

  margin-bottom: ${RFValue(8)}px;
`;
export const SubTitleGeneral = styled.Text`
  width: ${RFValue(176)}px;
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_white};
  margin-left: ${RFValue(8)}px;
`;