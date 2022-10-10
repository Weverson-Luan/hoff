/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, TextInputForm} from './styles';

interface InputProps extends TextInputProps {
  width: string;
  height: string;
  color: string;
}
export function Input({width, height, color, ...rest}: InputProps) {
  return (
    <Container>
      <TextInputForm {...rest} width={width} height={height} color={color} />
    </Container>
  );
}
