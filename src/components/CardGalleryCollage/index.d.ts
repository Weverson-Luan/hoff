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
}


interface IFileProps{
  uri: string | undefined;
  type: string;
  name: string;
}


/**
 * EXPORTS
 */
export { IGalleryCollageProps, IFileProps };
