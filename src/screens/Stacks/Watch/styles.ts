/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Wrapper = styled.ScrollView`
  width: 100%;

  flex: 1;
  background-color: ${({theme}) => theme.colors.brand_secondary};
`;

export const Main = styled.View`
  width: 100%;

  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.brand_gray_200};
`;

export const WrapperBox = styled.View`
  width: 80%;
  margin-top: ${RFValue(4)}px;

  padding: ${RFValue(8)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const WrapperPhoto = styled.View`
  width: 100%;

  padding-left: ${RFValue(18)}px;

  padding-top: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme}) => theme.colors.brand_primary};
`;
export const TitleAll = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme}) => theme.colors.brandy_black};
`;
export const TitleGeneral = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme}) => theme.colors.brand_white};
`;
export const TitlePhotos = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme}) => theme.colors.brand_white};
`;
export const WrapperFloat = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
