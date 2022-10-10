
export interface IPatientWatch {
  consultas: [ 
    {
      id: number,
      paciente_id: number,
      updated_at: string,
      usuario_id: number,
      created_at: string,
      data_hora: string,
  
      fotos: [
        {
          consulta_id: string,
          created_at:string,
          filename:string,
          id: number,
          link_file: string, 
          observacao: string,
          observacao_limit: string;
          updated_at:string,
          usuario_id: number
        },
      ];
    },
  ];
}