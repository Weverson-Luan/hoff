import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Wrapper = styled.ScrollView`
  width: 100%;

  flex: 1;
  background-color: ${({theme})=> theme.colors.brand_secondary};
`;

export const WrapperImage = styled.View`
  width: 100%;
`;
export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(414)}px;
`;
export const WrapperSelect = styled.View`
  width: 100%;
  margin-top: ${RFValue(12)}px;

  padding: ${RFValue(16)}px;
`;

export const WrapperButton = styled.View`
  width: 100%;
  margin-top: ${RFValue(50)}px;

  padding: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

  flex: 1;
`;
export const TitleButton = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brandy_black};
  
`;
export const ButtonCancel = styled.TouchableOpacity`
`;
export const SubTitleButton = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};
`;