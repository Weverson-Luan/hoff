import { useState } from "react";
import { TouchableOpacity, Linking } from "react-native";

//react-native-base
import { Center, Modal, Text, View } from "native-base";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//assets
import DownloadSvg from "../../assets/download.svg";
import TrashSvg from "../../assets/trash.svg";

//dtos
import { IResponseToken } from "../../dtos/token";

//services
import { apiBaseUrl } from "../../services/api";

//styles-components
import { styles } from "./styles";

export function ModalOptions({ query_id }: any) {
  const [showModal, setShowModal] = useState(true);
  const handleDownloadImagesPatients = async () => {
    Linking.openURL(
      `https://api-hof.worktabsystems.com.br/v1/paciente/download-consulta/${query_id}`
    );
  };

  const handleDeleteQueryPatients = async () => {
    const key = "@login_user";
    const token = await AsyncStorage.getItem(key);
    const tokenTransform: IResponseToken = JSON.parse(token);

    /**
     * IF USER IS LOGGED IN WITH YOUR GOOGLE ACCOUNT
     */
    if (!tokenTransform.token) {
      apiBaseUrl
        .delete(`/v1/paciente/delete-consulta/${query_id}`, {
          headers: {
            Authorization: `Bearer ${String(tokenTransform)}`,
          },
        })
        .then((response) => {
          return setShowModal(!setShowModal);
        })
        .catch((error) => console.error("Error Delete consulta", error));
    }

    /**
     *  IF USER IS LOGGED IN WITH THEIR ACCOUNT CREATED BY THE APP
     */
    if (tokenTransform.token) {
      apiBaseUrl
        .delete(`/v1/paciente/delete-consulta/${query_id}`, {
          headers: {
            Authorization: `Bearer ${tokenTransform.token}`,
          },
        })
        .then((response) => {
          return setShowModal(!setShowModal);
        })
        .catch((error) => console.error("Error Delete consulta", error));
    }
  };
  return (
    <Center style={styles.container}>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" style={styles.content_list}>
          <Modal.CloseButton />

          <View style={{ borderColor: "#3B3B47", borderBottomWidth: 1 }}>
            <TouchableOpacity
              style={styles.content_desc}
              onPress={() => handleDownloadImagesPatients()}
            >
              <DownloadSvg width={14} height={14} />
              <Text style={styles.text_title}>Download</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Faça o download de todo o procedimento
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.content_desc}
              onPress={() => handleDeleteQueryPatients()}
            >
              <TrashSvg width={14} height={14} />
              <Text style={styles.text_title}>Excluir</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Exclua os dados do paciente</Text>
          </View>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
