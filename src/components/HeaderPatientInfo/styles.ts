/* eslint-disable prettier/prettier */
/**
 * STYLED-COMPONENTS
 */
import styled from 'styled-components/native';

/**
 * RN RESPONSIVE-FONTSIZE
 */
import {RFValue} from 'react-native-responsive-fontsize';

export const ContainerHeader = styled.View`
  width: 100%;

  height: ${RFValue(50)}px;
  background-color: ${({theme}) => theme.colors.brand_gray_200};
`;
export const Content = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 18px;
`;
export const TitleName = styled.Text`
  font-size: ${RFValue(17)}px;

  color: ${({theme}) => theme.colors.brand_white};
  font-family: ${({theme}) => theme.fonts.primary_poppins_600};
`;
export const ButtonIcon = styled.TouchableOpacity``;
