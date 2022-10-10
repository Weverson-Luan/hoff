import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
  width: 100%;

  flex: 1;
  background-color:  ${({theme})=> theme.colors.brand_secondary};
`;
export const WrapperBox = styled.View`
  width: 100%;

  margin-bottom: ${RFValue(20)}px;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  
  margin-top: ${RFValue(16)}px;
`;
export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const WrapperSwitch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;

`;
export const WrapperButton = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};
`;
export const TitleMain = styled.Text`
   font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme})=> theme.colors.brand_white};
`;

export const WrapperNotification= styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;


`;
export const TitleNotification = styled.Text`
   font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: 24px;
  width: 300px;

  flex-wrap: wrap;
  color: ${({theme})=> theme.colors.brand_white};
`;