import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ButtonProps } from "./index.d";

export const Wrapper = styled.View`
`;

export const WrapperDesc = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperCollage = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
export const CollageSquare = styled.View`
  width: ${RFValue(126)}px;
  height: ${RFValue(150)}px;
  background-color: transparent;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CollageRectangle = styled.View`
  width: ${RFValue(122)}px;
  height: ${RFValue(130)}px;
  background-color: transparent;
  flex-direction: row;

`;
export const WrapperLeft = styled.View`
  width: ${RFValue(170)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleDate = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
`;

export const TitlePhotos = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
`;

export const WrapperText = styled.View`
  width: ${RFValue(200)}px;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  justify-content: space-between;

  margin-top: ${RFValue(-18)}px;
`;
export const TitleWatch = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};
`;
export const TitleAnalysis = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(14)}px;
  line-height: 21px;

  color: ${({theme})=> theme.colors.brand_primary};
`;

export const WrapperImage = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

`;
export const Image = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
`;
export const ButtonPositionOne = styled.TouchableOpacity<ButtonProps>`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  border-width: ${({ image })=> image ? '0px' : '1px'};
  border-color: ${({ image })=> image ? 'transparent' : '#FFF'};
  align-items: center;
  justify-content: center;

  
`;
export const ImageVertical = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(120)}px;
`;
export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${RFValue(52)}px;
  height: ${RFValue(120)}px;
  border-width: ${({ image })=> image ? '0px' : '1px'};
  border-color: ${({ image })=> image ? 'transparent' : '#FFF'};
  align-items: center;
  justify-content: center;
  margin-left: 2px;

`;