/* eslint-disable prettier/prettier */
import {TouchableOpacityProps} from 'react-native';

interface PictureImageProps {
  patient_id?: any;
  patient_query?: any;
  position?: number;
  name: string;
  img?: string;
  uri?: string;
  register: boolean;
  width?: number;
  height?: number;
}

/**
 * BUTTON ICONS PROPS
 */
interface ButtonIconProps extends TouchableOpacityProps {
  isSelect?: boolean | null;
}

interface IWrapperImageProps {
  progress: boolean;
}

/**
 * EXPORTS
 */
export {PictureImageProps, ButtonIconProps, IWrapperImageProps};
