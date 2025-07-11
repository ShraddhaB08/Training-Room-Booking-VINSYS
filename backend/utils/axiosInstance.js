import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // or full backend URL if needed, like 'http://localhost:5000/api'
});

// Automatically add token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
