/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiBaseUrl = axios.create({
  baseURL: 'https://api-hof.worktabsystems.com.br/api',
});

export {apiBaseUrl};
