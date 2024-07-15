import axios from 'axios';

const apiRequest = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_DOMAIN}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
