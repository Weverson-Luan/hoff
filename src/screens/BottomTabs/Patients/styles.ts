import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;

  background-color: ${({theme})=> theme.colors.brand_secondary};
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;
export const WrapperFloat = styled.View`
  width: 100%;
  
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  position: relative;
`;
export const Input = styled.TextInput`
  width: 90%;
  height: 35px;

  border-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_white};
  border-radius: 4px;

  padding-left: 15px;
  color: ${({theme})=> theme.colors.brand_white};

`;