/**
 * IMPORTS
 */

interface IDataProps {
  id: number;
  data_hora_br?: string;
  fotos: any[];

}
 interface IGalleryCollageProps{
  data: IDataProps;
  patient_id: number;
  patient_query: number;
  position: number | boolean;
  props: any;
}


interface IFileProps{
  uri: string | undefined;
  type: string;
  name: string;
}


interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}

/**
 * EXPORTS
 */
export { IGalleryCollageProps, IFileProps };
