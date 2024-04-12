import axios from 'axios';

// ----------------------------------------------------------------------


export const axiosInstance = axios.create({
    baseURL: `https://api-emptrack.onrender.com/`,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong'
        )
);

export default axiosInstance;