/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {TextInputProps, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface InputProps extends TextInputProps {
  width?: string;
  height?: string;
  color?: string;
}
export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.brand_secondary};
`;

export const TextInputForm = styled(TextInput)<InputProps>`
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
  background-color: ${({color, theme}) =>
    color || theme.colors.brand_secondary};

  border: 1px solid ${({theme}) => theme.colors.brand_gray_150};
  border-radius: ${RFValue(4)}px;
  margin-bottom: ${RFValue(14)}px;

  padding-left: 16px;
  color: ${({theme}) => theme.colors.brand_gray_100};

  font-size: 14px;
`;
export const Title = styled.Text``;
