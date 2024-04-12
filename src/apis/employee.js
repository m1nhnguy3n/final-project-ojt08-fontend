// config
import axios from '../config/axios';
// ----------------------------------------------------------------------

export function getAllEmployeeApi() {
    return axios.get('/employee/');
}

export function getOneEmployeeApi(employeeId) {
    return axios.get(`/employee/${employeeId}`);
}

export function createOneEmployeeApi(employData) {
    return axios.post('/employee/', {
        employData,
    });
}

export function deleteOneEmployeeApi(employeeId) {
    return axios.delete(`/employee/${employeeId}`);
}
