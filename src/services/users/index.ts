/* eslint-disable prettier/prettier */
import {UserRegister} from '../../dtos/user-register';
import {apiBaseUrl} from '../api';

/*/**
 * CHAMADAS NA API
 */

export const createUserWithEmailAndPassword = async (data: UserRegister) => {
  // eslint-disable-next-line quotes
  return apiBaseUrl.post('/register', data, {
    headers: {Authorization: '', 'Content-Type': 'application/json'},
  });
};

export const getAllUsers = async (token: string) => {
  return apiBaseUrl.get('/v1/user/search', {
    headers: {Authorization: `Bearer ${token}`},
  });
};

export const getUsersInfo = async (token: string) => {
  return apiBaseUrl.get('/v1/user/my-info', {
    headers: {Authorization: `Bearer ${token}`},
  });
};

export const updateUser = async (token: string, data: any) => {
  return apiBaseUrl.post('/v1/user/save', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
