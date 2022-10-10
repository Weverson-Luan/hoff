import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme })=> theme.colors.brand_secondary};
`;
