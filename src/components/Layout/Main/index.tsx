import React,{ ReactNode, ReactChildren } from "react";

// dto
import { MainProps } from "../../../dtos/main-props";

//styled-components
import { Wrapper  } from "./styles";

export function Main({ children }: MainProps){
  return(
    <Wrapper>
      {children}
    </Wrapper>
   
  )
}