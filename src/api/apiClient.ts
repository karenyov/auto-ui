import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;",
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "true",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);