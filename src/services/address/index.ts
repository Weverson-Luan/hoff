/* eslint-disable prettier/prettier */
import {apiBaseUrl} from '../api';
import {IAuthenticationUsers} from '../../dtos/authenticate-login-with-password';

export const updatedAddressWithUsers = async (
  data: IAuthenticationUsers,
  token: string,
) => {
  return apiBaseUrl.post('/v1/updated-address', data, {
    headers: {Authorization: `Bearer ${token}`},
  });
};
