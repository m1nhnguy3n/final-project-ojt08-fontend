import axios from 'axios';

// ----------------------------------------------------------------------

export const axiosInstance = axios.create({
    baseURL:
        location.origin.includes('127.0.0.1') ||
        location.origin.includes('localhost')
            ? `http://${location.hostname}:3000/`
            : `https://api-emptrack.onrender.com/`,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong'
        )
);

export default axiosInstance;
