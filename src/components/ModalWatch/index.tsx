import { useState } from "react";
import { TouchableOpacity, Linking, Alert } from "react-native";

//react-native-base
import { Center, Modal, Text, View } from "native-base";

//components
import { Load } from "../Load";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//styles-components
import { styles } from "./styles";
import { WrapperInput, Input } from "./styles";
import { Button } from "../Form/Button";
import { useTheme } from "styled-components";
import { handleCreatePatientsWatch } from "../../services/patients/patients";
import { IResponseToken } from "../../dtos/token";

interface ModalWatchProps {
  onPress: () => void;
  patient_id: number;
}
export function ModalWatch({ onPress, patient_id }: ModalWatchProps) {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(true);
  const [observacao, setObservacao] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWatch = async () => {
    setIsLoading(!isLoading);
    const token = await AsyncStorage.getItem(process.env.TOKEN_USER);
    const tokenTransform: IResponseToken = JSON.parse(token);
    const data = {
      paciente_id: patient_id,
      observacao,
    } as any;

    handleCreatePatientsWatch(data, tokenTransform.usuario.token_access)
      .then((_responseCreateWatch) => {
        Alert.alert(
          "Cadastro de observação de paciente",
          "Cadastro de oberservação de paciente foi feito com sucesso."
        );
        setShowModal(!showModal);
        setObservacao("");
        setIsLoading(!isLoading);
      })
      .catch((_error) => {
        return Alert.alert(
          "Cadastro de observação de paciente",
          "Parece que houve um error em cadastrar uma observação para um paciente feche seu app e tente novamente."
        );
      })
      .finally(() => {
        setIsLoading(!isLoading);
      });
  };

  return (
    <Center style={styles.container}>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={styles.content_list}>
          <Modal.CloseButton style={{marginTop: -8}}/>

          <Text style={styles.text_title}>Cadastrar observações</Text>
          <WrapperInput>
            <Input
              multiline
              placeholder="Digite sua observação"
              placeholderTextColor={"#fff"}
              onChangeText={(text) => setObservacao(text)}
            />
          </WrapperInput>
          <Button
            width="100%"
            height="50px"
            background_color={theme.colors.brand_primary}
            onPress={() => handleWatch()}
          >
            {isLoading ? (
              <Load color={theme.colors.brand_primary} small={23} />
            ) : (
              <Text style={styles.text}>Cadastrar observação</Text>
            )}
          </Button>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
