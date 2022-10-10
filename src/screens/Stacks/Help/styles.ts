import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
  width: 100%;

  flex: 1;
  background-color:  ${({theme})=> theme.colors.brand_secondary};;
`;
export const WrapperBox = styled.View`
  width: 100%;

  padding-left: ${RFValue(18)}px;
  padding-top: ${RFValue(16)}px;
`;
export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_primary};
`;