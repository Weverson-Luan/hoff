/* eslint-disable prettier/prettier */
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.brand_secondary};

  padding: ${RFValue(16)}px;
`;
export const WrapperHeaderArrow = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({theme}) => theme.colors.brand_secondary};

  margin-top: ${RFValue(4)}px;
`;
export const WrapperLogo = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;

  margin-top: ${RFValue(60)}px;

  align-items: center;
  justify-content: center;
`;
export const WrapperInput = styled.View`
  width: 100%;
  flex-direction: column;

  margin-top: ${RFValue(60)}px;
`;
export const WrapperInputPassword = styled.View`
  position: relative;
`;
export const TitleError = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(12)}px;
  line-height: 21px;
  color: ${({theme}) => theme.colors.brand_red_300};
`;
export const ButtonEye = styled.TouchableOpacity`
  position: absolute;
  margin-left: ${RFValue(310)}px;
`;
export const WrapperForget = styled.TouchableOpacity`
  width: 100%;

  align-items: flex-end;
  justify-content: flex-start;
`;
export const TitleForget = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(14)}px;
  line-height: 21px;
  color: ${({theme}) => theme.colors.brand_primary};
`;
export const WrapperButton = styled.View`
  width: 100%;
  flex-direction: column;

  margin-top: ${RFValue(40)}px;
`;
export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_600};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme}) => theme.colors.brandy_black};
`;
export const TextOu = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_600};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme}) => theme.colors.brand_white};
  margin-bottom: ${RFValue(16)}px;
`;
export const TextButtonNew = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_600};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;
  text-align: center;

  color: ${({theme}) => theme.colors.brand_white};
`;
export const WrapperDescription = styled.View`
  width: 100%;

  margin-top: ${RFValue(48)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(12)}px;
  line-height: 18px;
  text-align: center;

  color: ${({theme}) => theme.colors.brand_white};
`;
