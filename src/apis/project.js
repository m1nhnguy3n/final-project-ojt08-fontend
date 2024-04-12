// config
import axios from '../config/axios';
// ----------------------------------------------------------------------

export function getAllProjectsApi() {
    return axios.get('/projects/');
}


