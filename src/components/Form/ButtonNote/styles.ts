import styled from 'styled-components/native';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends TouchableOpacityProps {
  width?: string;
  height: string;
  background_color: string;
  border?: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  background-color: ${({ theme, background_color }) => background_color || theme.colors.brand_secondary};
  border-radius: 6px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '100%'};

  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  
  padding: 4px;
  
  border: ${({ border, theme }) => (border)};
  margin-bottom: ${RFValue(15)}px;
`;
