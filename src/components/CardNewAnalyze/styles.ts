import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacityProps, TouchableOpacity } from "react-native";


  interface ButtonProps extends TouchableOpacityProps {

  }
export const Wrapper = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  background-color:  ${({theme})=> theme.colors.brand_secondary};

  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_150};

  margin-bottom: ${RFValue(16)}px;

  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperCard = styled.View`
  width: 100%;

  
  flex-direction: row;
  margin-bottom: ${RFValue(6)}px;
`;
export const TitleNewPhoto = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_white};

  margin-left: ${RFValue(12)}px;
  
`;
export const SubTitleNewPhoto = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(10)}px;
  line-height: 15px;

  color: ${({theme})=> theme.colors.brand_gray_150};
  
`;