import ArrowRightSVG from "../../assets/arrow-right.svg";
import { 
  Wrapper,
  WrapperDesc,
  TitleHelp,
  SubTitleHelp
} from "./styles";

interface CardHelpProp {
  title: string;
  subTitle: string;
}

export function CardHelp({title, subTitle}: CardHelpProp){
  return(
    <Wrapper>
        <WrapperDesc>
          <TitleHelp>{title}</TitleHelp>
          <SubTitleHelp>{subTitle}</SubTitleHelp>
        </WrapperDesc>
        <ArrowRightSVG 
          style={{right: 16}}
          width={22} 
          height={22}
        />
    </Wrapper>
  )
}