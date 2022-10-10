import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`

  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({theme})=> theme.colors.brand_secondary};
`;
export const WrapperButton = styled.View`

  width: 100%;
  flex-direction: row;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};

  padding: ${RFValue(16)}px;
`;
export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brandy_black};
`;
export const TitleFacial = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
`;
export const WrapperFloat = styled.View`
  width: 100%;
  
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  position: relative;
`;