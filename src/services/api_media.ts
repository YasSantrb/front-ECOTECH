import axios from 'axios';

const apiMedia = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000, 
});

apiMedia.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Token ${token}`; 
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default apiMedia;