import { useState } from "react";

//assets
import Group from "../../assets/arrow-right.svg";

//components
import { ZoomImage } from "../ZoomImage";

//styled
import { Wrapper, WrapperDesc, SubTitleGeneral } from "./styles";

export function CardPhoto({ data }: any) {
  const [isModal, setIsModal] = useState("");
  return (
    <Wrapper onPress={() => setIsModal("1")}>
      <WrapperDesc>
        <ZoomImage
          description={data.observacao}
          key={data.id}
          uri={
            data?.link_file
              ? data?.link_file
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65QcYEoI7JVRk6ob4gQm_1D5IxE7OVns3hTdViFr284-SyRazmZ6-jPWpn4uru9NE9ts&usqp=CAU"
          }
        />
        <SubTitleGeneral>{data?.observacao_limit}</SubTitleGeneral>
      </WrapperDesc>
      <Group width={12} height={12} />
    </Wrapper>
  );
}
