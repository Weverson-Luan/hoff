//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * REMOVENDO TOKEN DE UM USUÁRIO LOGADO.
 * @param tokenTransform 
 * @returns string
 */
 async function handleRemoveTokenUser(key: string){
  try {
    if(key){
      return await AsyncStorage.removeItem(key);
    };
  } catch(e) {
    return  console.error(e);
  };
};

export {
  handleRemoveTokenUser,
};