/**
 * IMPORTS
 */
import { TouchableOpacityProps } from "react-native";


interface ButtonProps extends TouchableOpacityProps {
  image?: boolean;
}

interface ICollageProps {
  id: number;
  usuario_id: number;
  consulta_id: number;
  empresa_id: number;
  file_name: string;
  fullpath_file: string;
  link_file: string;
  posicao: number;
  created_at: string;
  updated_at: string;
}

interface ICardGalleryAnalyzeProps {
  collage: ICollageProps[];
  data: {
    patient_id: number;
    patientQuery: number;
  };
}


/**
 * EXPORTS
*/
export { ButtonProps, ICardGalleryAnalyzeProps}