import React,{ useState } from "react";
import { Modal as ModalRN} from "react-native";
import { useTheme } from "styled-components";
import { Modal, FormControl, Text, TextArea, VStack, Select, CheckIcon, View } from 'native-base';

//components
import { Button as ButtonCancel } from "../Form/Button";

// component use productSelect


//interface
interface IModalCancelProps{
  onIsModalCancel: ()=> void;
  isModalCancel?: boolean;
}


export function ModalSelectCategory({onIsModalCancel, isModalCancel}:IModalCancelProps){
    const theme = useTheme();
    const [showModal, setShowModal] = useState(false);
    let [service, setService] = useState("");

    function handleIsModal(){
      onIsModalCancel();
      setShowModal(!showModal)
    };

    return (
      <>
        <View>
            <VStack alignItems="center" space={4} marginBottom={4}>
                <Select 
                  borderRadius={6}
                  shadow={0.1} 
                  selectedValue={service}
                  width={"100%"}
                  height={52}
                  accessibilityLabel="Selecione a opção..."
                  fontSize={14}
                  placeholder="Categoria"
                  _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5"  />}}
                  _light={{ bg: theme.colors.brand_secondary}} 
                  _dark={{ bg: "white"}}
                  onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item shadow={2} label="SIM" value="ux" />
                  <Select.Item shadow={2} label="NÃO" value="web" />
                  <Select.Item shadow={2} label="ENTRE EM CONTATO" value="cross" />
                  <Select.Item shadow={2} label="REAGENDAMENTO" value="ui" />
                  <Select.Item shadow={2} label="OUTRO DIA" value="backend" />
                </Select>
            </VStack>
       
         
        </View>
      </>
    )
}