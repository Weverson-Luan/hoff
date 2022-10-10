import { TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonIconProps } from './index.d';


export const Wrapper = styled.ScrollView`
  width: 100%;

  flex: 1;
  background-color:  ${({theme})=> theme.colors.brand_secondary};
`;
export const WrapperImage = styled.View`
  width: 100%;
  /* align-items: center;
  justify-content: center; */
  height: ${RFValue(414)}px;
  position: relative;
`;
export const WrapperLoad = styled.View`
  width: 100%;
  height: ${RFValue(414)}px;
  align-items: center;
  justify-content: center;


`;
export const WrapperClosed = styled.View`
  position: relative;
`;
export const ButtonClosed = styled.TouchableOpacity`
  position: absolute;
  margin-top: ${RFValue(12)}px;
  left: ${RFValue(8)}px;
`;
export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(414)}px;
`;
export const ImageFilter = styled.Image`
  width: 100%;
  height: ${RFValue(350)}px;

  margin-top:${RFValue(30)}px;

`;
export const WrapperPosition = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${({theme})=> theme.colors.brand_gray_200};

  padding: ${RFValue(8)}px;
`;
export const Box = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TitlePosition = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};
  margin-left: ${RFValue(6)}px;
`;
export const WrapperIcon = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;
export const TitleIcon = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_500};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(10)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_white};

  margin-top: ${RFValue(6)}px;
`;
export const WrapperType = styled.View`
  width: 100%;
  background-color:  ${({theme})=> theme.colors.brand_secondary};

  padding: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;

  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};
`;
export const Button = styled(TouchableOpacity)<ButtonIconProps>`
  border: 1px;
  border-color: ${({theme, isSelect})=> isSelect ? theme.colors.brand_primary : theme.colors.brand_secondary};


`;
export const TitleType = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_primary};
  margin-left: ${RFValue(6)}px;
`;
export const WrapperIconType = styled.View`
  width: ${RFValue(160)}px;
  flex-direction: row;
  align-items: flex-start;

  justify-content: space-around;
  align-items: flex-end;

  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;


`;

export const ButtonFilter = styled(TouchableOpacity)<ButtonIconProps>`
  border-width: 1px;
  border-color: ${({theme, isSelect})=> isSelect ? theme.colors.brand_primary : theme.colors.brand_secondary};
  padding: 6px;
`;
export const WrapperPositionFace = styled.View`
  width: 100%;
  background-color:  ${({theme})=> theme.colors.brand_secondary};

  padding: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;

  border-bottom-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_200};
`;
export const TitlePositionFace = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_poppins_400};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  line-height: 24px;

  color: ${({theme})=> theme.colors.brand_primary};
  margin-left: ${RFValue(10)}px;
`;
export const WrapperIconPositionFace = styled.View`
  width: ${RFValue(250)}px;
  flex-direction: row;
  align-items: flex-start;

  justify-content: flex-start;

  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  padding-left: ${RFValue(12)}px;

  /* background-color:  ${({theme})=> theme.colors.brand_white}; */

`;
export const WrapperButton = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: red;
  margin-top: ${RFValue(24)}px;
`;
export const ButtonCapture = styled.TouchableOpacity`
  position: absolute;
  bottom: ${RFValue(4)}px;
  justify-content: center;
  align-items: center;
`;

/**
 * STYLED-NATIVE
 */
 export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
