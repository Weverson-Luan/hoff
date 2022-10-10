import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const ButtonIconFloat = styled.TouchableOpacity`
    width: ${RFValue(56)}px;
    height: ${RFValue(56)}px;

    border-radius: ${RFValue(28)}px;
    position: absolute;
   
    background: ${({theme})=> theme.colors.brand_primary};

    bottom: ${RFValue(36)}px;
    right: ${RFValue(16)}px;
    align-items: center;
    justify-content: center;
`;