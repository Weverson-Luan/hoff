/* eslint-disable prettier/prettier */
/**
 * STYLED-COMPONENTS
 */
import styled from 'styled-components/native';

/**
 * RN RESPONSIVE-FONTSIZE
 */
import {RFValue} from 'react-native-responsive-fontsize';

interface ContainerHeaderProps {
  search: boolean;
}

export const ContainerHeader = styled.View<ContainerHeaderProps>`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${({theme}) => theme.colors.brand_gray_200};

  margin-top: ${({search}) => (search ? '0px' : '10px')};
  justify-content: flex-end;
`;
export const Content = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 18px;
`;
export const TitleName = styled.Text`
  font-size: ${RFValue(17)}px;

  color: ${({theme}) => theme.colors.brand_primary};
  font-family: ${({theme}) => theme.fonts.primary_poppins_600};
`;
export const ButtonIcon = styled.TouchableOpacity``;

export const Input = styled.TextInput`
  width: 90%;
  height: 35px;

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.brand_white};
  border-radius: 4px;

  padding-left: 15px;
  color: ${({theme}) => theme.colors.brand_white};
`;
