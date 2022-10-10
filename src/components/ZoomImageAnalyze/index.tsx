import React, { useState } from "react";
import { Modal, TouchableOpacity, Image as ImageModal } from "react-native";
import { useTheme } from "styled-components";

//assets
import ArrowLeftSVG from "../../assets/closed.svg";

//typings
import { ImageProps } from "./index.d";

//styled-components
import {
  Container,
  WrapperImage,
  HeaderModal,
  Image,
  WrapperTitle,
  Title,
  TitleWatch,
} from "./styles";


export function ZoomImageAnalyze({ uri, description, analyze }: ImageProps) {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <HeaderModal>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <ArrowLeftSVG width={24} height={24} />
          </TouchableOpacity>
        </HeaderModal>
        
        <WrapperImage>
          <ImageModal
            accessibilityViewIsModal
            resizeMode="contain"
            style={{
              width: "100%",
              height: description ? "50%" : "100%",
              backgroundColor: theme.colors.brand_secondary,
            }}
            source={{ uri: uri }}
          />
          
          {description && <TitleWatch>Observações</TitleWatch>}

          <WrapperTitle style={{ padding: description ? 12 : 0 }}>
            <Title>{description}</Title>
          </WrapperTitle>
        </WrapperImage>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          analyze={analyze}
          source={{
             uri: uri
          }}
        />
      </TouchableOpacity>
    </Container>
  );
}
