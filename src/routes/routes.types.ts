// Types name of Routes
export type StackParamsList = {
  SignIn: undefined;
  Login: undefined;
  

  Authentication: undefined;
  PatientsInfo: {
    patient_id?: number;
    name?: string;
  };
  NewPhotos: {
    patient_id?: number;
    name?: string;
    register?: boolean;
  };
  Note: undefined;
  PatientsCategory: {
   img_uri?: string;
   patient_id?: number;
   name?: string;
   register?: boolean;
  };
  CapturePhoto: {
    img?: any;
    patient_id?: number;
    name?: string;
  };
  Analyze: undefined;
  NewAnalyze: undefined; 
  Help: undefined;
  NewPatients: undefined;
  NewPatientsInfo: {
    patient_id?: number;
    name?: string;
  };
 
};  