interface IResponseTokenGoogle {
  cpf: string;
  created_at:string;
  deleted_at: string;
  email: string;
  email_verified_at: boolean;
  empresa_id: number;
  first_access: number;
  foto_perfil: string;
  google_foto:string;
  google_user_id: number;
  id: number;
  nome: string;
  papel_id: string;
  password: string;
  radius: number
  remember_token: string;
  sexo: string;
  token_access: string;
};

export { 
  IResponseTokenGoogle,
};