// config
import axios from '../config/axios'

// ----------------------------------------------------------------------

export function loginApi(values) {
    return axios.post('/auth/login/', {
        values,
    });
}