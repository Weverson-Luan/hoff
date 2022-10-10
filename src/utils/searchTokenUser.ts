//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';


 const handleUserToken = async ()=> {
  const data = await AsyncStorage.getItem(process.env.TOKEN_USER);
  if(data){
    const isLogged = JSON.parse(data);
    return isLogged.token;
  }else{
    return undefined;
  };
};


export {
  handleUserToken,
};