import axios, { AxiosResponse, AxiosError } from 'axios';

// const isProd = process.env.NODE_ENV === 'production';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,                          
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.warn('Unauthorized. Maybe token expired.');
          break;
        case 403:
          console.warn('Forbidden.');
          break;
        default:
          console.error(`API error: ${error.message}`);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
