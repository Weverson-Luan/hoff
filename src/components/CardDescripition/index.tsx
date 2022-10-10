import { useState } from "react";
import { useTheme } from "styled-components";

// components
import { Button } from "../Form/Button";
import { ModalWatch } from "../ModalWatch";
import { Load } from "../Load";

// assets
import Group from "../../assets/arrow-right.svg";
import ArrowLeftSVG from "../../assets/closed.svg";

// styled
import {
  Wrapper,
  WrapperModal,
  HeaderModal,
  ContentObservation,
  TitleObservation,
  ContentObservationDesc,
  TitleObservationDesc,
  WrapperDesc,
  TitleGeneral,
  WrapperLoad,
  WrapperDescription,
  WrapperMain,
  SubTitleGeneral,
  WrapperButton,
  TitleButton,
} from "./styles";
import { Modal } from "react-native";

interface CardDescriptionProps {
  title?: string;
  patient_id?: number;
  observation: any;
}
export function CardDescription({
  title,
  patient_id,
  observation,
}: CardDescriptionProps) {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [showModalDesc, setShowModalDesc] = useState(false);
  const [dataModal, setDataModal] = useState<string>("");

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleObservation = (observation: string) => {
    setDataModal(observation);
    setShowModalDesc(!showModalDesc);
  };

  return (
    <>
      <Wrapper>
        {showModalDesc && (
          <Modal
            visible={true}
            onRequestClose={() => setShowModalDesc(!showModalDesc)}
            style={{
              flex: 1,
              backgroundColor: theme.colors.brand_secondary,
              width: "100%",
            }}
          >
            <WrapperModal>
              <HeaderModal onPress={() => setShowModalDesc(!showModalDesc)}>
                <ArrowLeftSVG width={24} height={24} />
              </HeaderModal>

              <ContentObservation>
                <TitleObservation>Observação</TitleObservation>
              </ContentObservation>

              <ContentObservationDesc>
                <TitleObservationDesc>{dataModal}</TitleObservationDesc>
              </ContentObservationDesc>
            </WrapperModal>
          </Modal>
        )}
        <WrapperMain>
          <WrapperDesc>
            {title && <TitleGeneral>Gerais</TitleGeneral>}

            {observation ? (
              <>
                {observation?.map((item) => (
                  <WrapperMain key={item.id}>
                    {item.observacoes.map((item) => (
                      <WrapperDescription
                        key={item.id}
                        onPress={() => handleObservation(item.observacao)}
                        style={{
                          width: "93%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <SubTitleGeneral>
                          {item.observacao_limit}
                        </SubTitleGeneral>
                        <Group width={12} height={12} />
                      </WrapperDescription>
                    ))}
                  </WrapperMain>
                ))}
              </>
            ) : (
              <WrapperLoad>
                <Load color={theme.colors.brand_primary} small={23} />
              </WrapperLoad>
            )}
          </WrapperDesc>
          <WrapperButton>
            <Button
              width="280px"
              height="40px"
              background_color={theme.colors.brand_primary}
              onPress={() => handleShowModal()}
            >
              <TitleButton>Cadastrar observação</TitleButton>
            </Button>
          </WrapperButton>

          {showModal && (
            <ModalWatch
              patient_id={patient_id}
              onPress={() => handleShowModal()}
            />
          )}
        </WrapperMain>
      </Wrapper>
    </>
  );
}
