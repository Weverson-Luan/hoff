/**
 * IMPORTS
 */
interface IParams {
  patient_id: any;
  name: string;
  register: boolean;
  patientQuery: any;
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


/**
 * EXPORTS
 */
export { IParams, ICollageProps };