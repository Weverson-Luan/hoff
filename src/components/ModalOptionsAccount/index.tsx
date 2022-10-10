/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';

//react-native-base
import {Center, Modal, Text, View} from 'native-base';

//assets
import DownloadSvg from '../../assets/download.svg';
import TrashSvg from '../../assets/trash.svg';

//styles
import {styles} from './styles';

interface ModalOptionsAccountProps {
  onPress: () => void;
}
export function ModalOptionsAccount({onPress}: ModalOptionsAccountProps) {
  const [showModal, setShowModal] = useState(true);

  return (
    <Center style={styles.container}>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" style={styles.content_list}>
          <Modal.CloseButton />

          <View style={{borderColor: '#3B3B47', borderBottomWidth: 1}}>
            <TouchableOpacity
              style={styles.content_desc}
              onPress={() => onPress()}>
              <DownloadSvg width={14} height={14} />
              <Text style={styles.text_title}>Editar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Faça o download de todo o procedimento
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.content_desc}>
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
