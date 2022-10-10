import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
`;

export const WrapperInfo = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(14)}px;

  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};
`;

export const WrapperImage = styled.View`
 width:  ${RFValue(250)}px;
 flex-direction: row;
 align-items: center;


`;
export const ImagePatient = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: ${RFValue(25)}px;
`;
export const WrapperDesc = styled.View`
  /* width: 300px;
  flex-direction: row;
  align-items: center; */
  margin-left: ${RFValue(10)}px;
  flex-wrap: wrap;

`;
export const TitleName = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_white};
`;

export const TitleDate = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(10)}px;
  line-height: 15px;

  color: ${({theme})=> theme.colors.brand_gray_150};
`;
export const TitlePhoto = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_white};
`;