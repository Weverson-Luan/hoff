import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
  width: 100%;

  flex: 1;
  background-color:  ${({theme})=> theme.colors.brand_secondary};
`;
export const WrapperBox = styled.View`
  width: 100%;

  padding-left: ${RFValue(18)}px;
  padding-top: ${RFValue(16)}px;
`;
export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const WrapperIcon = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
`;
export const TitleIcon = styled.Text`
   font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme})=> theme.colors.brand_white};
  margin-top: ${RFValue(16)}px;
`;
export const WrapperButton = styled.View`
  width: 100%;
  background-color:  ${({theme})=> theme.colors.brand_secondary};

  flex: 1;
  position: absolute;
  bottom: 0;

  padding: ${RFValue(16)}px;
`;
export const TitleButton = styled.Text`
   font-family: ${({theme})=> theme.fonts.primary_poppins_600};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme})=> theme.colors.brandy_black};
`;
export const ButtonSubTitle = styled.TouchableOpacity`
`;
export const SubTitleButton = styled.Text`
   font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const WrapperImage = styled.View`
  width: 100%;
  margin-top: ${RFValue(60)}px;
`;
export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(414)}px;
`;