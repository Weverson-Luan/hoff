import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.ScrollView`
  width: 100%;
  flex: 1;

  background-color: ${({theme})=> theme.colors.brand_secondary};
`;
export const WrapperImage = styled.TouchableOpacity`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-top: ${RFValue(60)}px;
`;
export const Image = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;

  border-radius: ${RFValue(60)}px;
`;
export const WrapperTitle = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  height: 70px;

  margin-bottom: 10px;
`;
export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(16)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};

  margin-bottom: ${RFValue(8)}px;
`;
export const TitleGeneral = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};

  margin-bottom: ${RFValue(8)}px;
  padding-left: 8px;
`;
export const WrapperBox = styled.View`
  width: 100%;

  padding: ${RFValue(12)}px;
  
`;
export const WrapperMain = styled.View`
  width: 100%;

`;
export const WrapperInput = styled.View`
  width: 100%;

`;
export const WrapperIcon = styled.TouchableOpacity`
  width: 100%;

  position: absolute;
  left:${RFValue(280)}px;
  top: ${RFValue(14)}px;
`;
export const WrapperLogout = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TitleLogout = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(14)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_primary};
  margin-left: ${RFValue(10)}px;
`;
export const TitleButtonUpdate = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(14)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
  margin-left: ${RFValue(10)}px;
`;