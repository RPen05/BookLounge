// API
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Замени на свой базовый URL
    // Другие настройки Axios, если нужны
});

export default apiClient;
