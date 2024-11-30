import { API_KEY, BASE_URL } from '@/lib/environment.constant';
import axios from 'axios';
import ApiError from './apiError.type';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params.apiKey = API_KEY;
    return config;
  },
  (error) => {
    console.error(`Error during a request: ${error}`);
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
      console.log(error, error.message);

      return Promise.reject({
        message: error.message || 'An unknown error occured',
        statusCode: error.status,
        details: error.response.data,
      } as ApiError);
    }

    return Promise.reject({
      message: 'Network error',
      details: error.message,
    } as ApiError);
  },
);

export default axiosClient;
