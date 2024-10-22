import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sw-api.starnavi.io',
  timeout: 10000,
});

export default axiosInstance;
