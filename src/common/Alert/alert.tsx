/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';

//react-native-base
import {Center, Modal, Text, View} from 'native-base';

//styles-components
import {styles} from './styles';
import {Button} from '../../components/Form/Button';
import {Load} from '../../components/Load';

//typings
import {IAlertProps} from './alert.d';

export function Alert({onPress, loading}: IAlertProps) {
  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <Center style={styles.container}>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="330px" style={styles.content_list}>
          {loading ? (
            <Load color="yellow" large={36} />
          ) : (
            <>
              <Modal.CloseButton marginTop={-4} />
              <View style={styles.contentTitle}>
                <Text style={styles.text_title}>Colagem de foto</Text>
              </View>

              <View>
                <Text style={styles.text}>
                  Tem certeza que deseja selecionar está imagem?
                </Text>
              </View>

              <View style={styles.wrapperButton}>
                <View style={{marginRight: 10}}>
                  <Button
                    onPress={() => setShowModal(!showModal)}
                    width="60px"
                    height="30px"
                    background_color="transparent">
                    <Text style={styles.textButton}>Cancel</Text>
                  </Button>
                </View>
                <Button
                  onPress={onPress}
                  width="50px"
                  height="30px"
                  background_color="transparent">
                  <Text style={styles.textButton}>Ok</Text>
                </Button>
              </View>
            </>
          )}
        </Modal.Content>
      </Modal>
    </Center>
  );
}
