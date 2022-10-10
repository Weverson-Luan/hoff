/* eslint-disable prettier/prettier */
import {apiBaseUrl} from '../api';

//types dto
import {IAuthenticationUsers} from '../../dtos/authenticate-login-with-password';
import {IAuthenticationGoogleUsers} from '../../dtos/authenticate-login-with-google-id';
import {IRegisterUserGoogle} from '../../dtos/user-register-google';

/*/**
 * CALLS ON THE API
 */

export const authenticationLoginWithPassword = async (
  data: IAuthenticationUsers,
) => {
  return apiBaseUrl.post('/login', data);
};

export const authenticationLoginWithUserGoogle = async (
  data: IAuthenticationGoogleUsers,
) => {
  return apiBaseUrl.post('/login-google', data);
};

export const authenticationRegisterWithUserGoogle = async (
  data: IRegisterUserGoogle,
) => {
  return apiBaseUrl.post('/register-google', data);
};
