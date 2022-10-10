interface IUser{
  success?: boolean,

  
    cpf: string,
    created_at: string,
    deleted_at: string,
    email: string,
    email_verified_at: boolean,
    empresa_id: number,
    first_access: number,
    foto_perfil: string,
    imagem: string;
    google_foto: string,
    google_user_id: null,
    id: number,
    nome: string,
    telefone: string;
    papel_id: number,
    password: string,
    radius: number,
    remember_token: string,
    sexo: string,
    token_access: string,
    ultimo_acesso: string,
    updated_at: string,
  message?: string,
}