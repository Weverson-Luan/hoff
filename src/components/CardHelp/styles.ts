import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};
`;
export const WrapperDesc = styled.View`
  padding: ${RFValue(16)}px;

  flex-direction: column;

  justify-content: space-between;
`;
export const TitleHelp = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_white};
`;
export const SubTitleHelp = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(10)}px;
  line-height: 15px;

  color: ${({theme})=> theme.colors.brand_gray_150};
  margin-top: ${RFValue(4)}px;
`;