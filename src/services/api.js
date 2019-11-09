import axios from 'axios';

const api = axios.create({
  baseURL: 'http://exampleapi.com',
});

export default api;
