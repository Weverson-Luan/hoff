import React from "react";
import { ActivityIndicator } from "react-native";

interface ILoadProps {
  color: string;
  large?: number;
  small?: number;
};
export function Load({color, large, small}: ILoadProps){

  return(
    <ActivityIndicator color={color} size={large || small}/>
  )
}