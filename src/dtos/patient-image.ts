/**
 * IMPORTS
 */
interface IMageProps {
  width: number;
  height: number;
  uri: string;
}
interface IPatientProps {
  img: IMageProps | any
  patient_id: number | any;
  name: string;
  register: boolean;
};

/**
 * EXPORTS
 */
export { IMageProps, IPatientProps}