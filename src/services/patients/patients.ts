/* eslint-disable prettier/prettier */
/**
 * IMPORTS
 */
import {apiBaseUrl} from '../api';

const getAllPatients = async (token: string) => {
  return apiBaseUrl.get('/v1/paciente/search', {
    headers: {Authorization: `Bearer ${token}`},
  });
};

const getPatientsInfo = async (id: number, token: string) => {
  return apiBaseUrl.get(`/v1/paciente/info/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
};

const uploadPatientsPhoto = async (data: any, token: string) => {
  return apiBaseUrl.post('/v1/paciente/enviar-foto', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

const handleCreatePatients = async (data: any, token: string) => {
  return apiBaseUrl.post('/v1/paciente/save', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

const handleExcludePatientsQuery = async (id: any, token: string) => {
  return apiBaseUrl.delete(`v1/paciente/delete-consulta/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
};

const handleExcludePatients = async (id: number, token: string) => {
  return apiBaseUrl.delete(`v1/paciente/delete/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
};

const handlePatientsSearch = async (token: string, name: string) => {
  return apiBaseUrl.get(`v1/paciente/search?search=${name}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
};

const handleCreatePatientsWatch = async (data: any, token: string) => {
  return apiBaseUrl.post('/v1/paciente/enviar-observacao', data, {
    headers: {Authorization: `Bearer ${token}`},
  });
};

const handleCreatePhotoCollage = async (
  data: IPatientCreatePhotoCollage,
  token: string,
) => {
  return apiBaseUrl.post('/v1/paciente/enviar-foto-colagens', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

const handlePhotoCollage = async (query_id: any, token: string) => {
  return apiBaseUrl.get(`v1/paciente/pesquisar-fotos-colagens/${query_id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
};

/**
 * EXPORTS
 */
export {
  getAllPatients,
  getPatientsInfo,
  uploadPatientsPhoto,
  handleCreatePatients,
  handleExcludePatientsQuery,
  handleExcludePatients,
  handlePatientsSearch,
  handleCreatePatientsWatch,
  handleCreatePhotoCollage,
  handlePhotoCollage,
};
