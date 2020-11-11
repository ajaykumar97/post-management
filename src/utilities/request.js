import Axios, { AxiosRequestConfig } from 'axios';

import { urls, actionTypes } from './constants';
import store from '../store';

export const axios = Axios.create({
  baseURL: urls.baseUrl,
  validateStatus: (status) => {
    if (status === 200 || status === 401) {
      return true;
    }
    return false;
  }
});

export const request = (config: AxiosRequestConfig) => axios(config).then((response) => {
  if (response.status === 401) {
    store.dispatch({
      type: actionTypes.SESSION_EXPIRE_REQUESTED,
      params: { showAlert: true }
    });

    return Promise.resolve({ data: {} });
  }
  return response;
});
