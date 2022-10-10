import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.brand_gray_200};
`;
export const WrapperModal = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand_secondary};
  flex-direction: column;
`;
export const HeaderModal = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: ${RFValue(12)}px;
`;
export const ContentObservation = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const TitleObservation = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(18)}px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.brand_white};
`;
export const ContentObservationDesc = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(22)}px;
  padding: 12px;
`;
export const TitleObservationDesc = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(12)}px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.brand_white};
`;
export const WrapperDesc = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.brand_secondary};
`;
export const TitleGeneral = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(16)}px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.brand_primary};
  margin-bottom: ${RFValue(8)}px;
  margin-top: 16px;
  margin-left: 16px;
`;
export const WrapperDescription = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.brand_gray_200};
  padding: 18px;
`;
export const WrapperMain = styled.View``;
export const WrapperLoad = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SubTitleGeneral = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.brand_white};
`;
export const WrapperButton = styled.View`
  width: 100%;
  padding-left: 16px;
  margin-top: 16px;
`;
export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_poppins_300};
  font-style: normal;
  font-weight: 300;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.brand_white};
`;
