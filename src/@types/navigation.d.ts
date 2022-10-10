export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Login: undefined;
      Register: undefined;

      /**
       * Routings Authenticates
       */

      Authentication: undefined;
      PatientsInfo: {
        patient_id?: number;
        name?: string;
      };
      NewPhotos: {
        patient_id?: {};
        patientQuery?: any;
        name?: string;
        register?: boolean;
      };
      Watch: {
        patient_id?: number;
      };
      PatientsCategory: {
        img?: any;
        patient_id?: number;
        name?: string;
        register?: boolean;
      };
      Analyze: {
        patient_id?: number;
        patientQuery?: number;
      };
      NewAnalyze: {
        patient_id?: number;
      };
      Help: undefined;
      NewPatients: {
        patient_id?: number;
      };
      NewPatientsInfo: {
        patient_id?: number;
      };
      Protected: undefined;
      CapturePhoto: {
        img?: any;
        patient_id?: number;
        name?: string;
        register?: boolean;
        patient_query?: number;
        position?: number;
      };
      NewPhotosCollage: {
        patient_id?: number;
        patient_query?: number;
        position?: number;

      };
      PatientImageGallery:{
        patient_id?: number;
        patient_query?: number;
        position?: number;
      }
    }
  }
}
