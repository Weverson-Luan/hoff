//dtos
import {PickerProps} from '../dtos/picker-image';

/**
 * IMPORTS
 */
 import * as ImagePicker from 'react-native-image-picker';


 const PickerImage = async () => {
   const result = await  ImagePicker.launchImageLibrary({
     mediaType: 'photo',
     quality: 1,
     maxWidth: 300,
    })

   if (!result.errorMessage) {
    return result.assets;
   };
 };


 /**
  * EXPORTS
  */
 export { PickerImage };
