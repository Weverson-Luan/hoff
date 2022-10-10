import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
`;
export const WrapperDesc = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperLeft = styled.View`
  width: ${RFValue(170)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonGroup = styled.TouchableOpacity`
`;
export const TitleDate = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
`;
export const TitlePhotos = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
`;
export const WrapperText = styled.View`
  width: ${RFValue(200)}px;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  justify-content: space-between;

  margin-top: ${RFValue(-18)}px;
`;
export const Button = styled.TouchableOpacity``;
export const TitleWatch = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const TitleAnalysis = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const WrapperImage = styled.View`
  flex-direction: row;
  width: 94%;
  flex-wrap: wrap;
  

`;
export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(120)}px;

  margin-bottom: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
  

`;