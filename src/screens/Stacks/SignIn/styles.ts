import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({theme})=> theme.colors.brand_secondary};

  padding: ${RFValue(16)}px;
`;
export const WrapperLogo = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;

  margin-top: ${RFValue(60)}px;

  align-items: center;
  justify-content: center;

`;
export const ImageLogo = styled.Image`
  width: 80%;

  /* margin-top: ${RFValue(60)}px; */

  align-items: center;
  justify-content: center;

`;
export const TitleLogo = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_600};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(20)}px;
  line-height: 30px;
  color: ${({theme})=> theme.colors.brand_primary};

  margin-top: ${RFValue(16)}px;
`;
export const WrapperButton = styled.View`
  width: 100%;

  margin-top: ${RFValue(122)}px;
`;
export const TitleButtonGoogle = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_600};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
`;
export const WrapperWithoutAccount = styled.TouchableOpacity`
  width: 100%;

  margin-top: ${RFValue(12)}px;


  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextWithoutAccount = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const WrapperDescription= styled.View`
  width: 100%;

  margin-top: ${RFValue(48)}px;


  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextDescription = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(12)}px;
  line-height: 18px;
  text-align: center;

  color: ${({theme})=> theme.colors.brand_white};
`;