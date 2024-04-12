import { createSlice } from '@reduxjs/toolkit';
import { getAllEmployeeApi } from '../../apis/employee';
import { dispatch } from '../store';
const initialState = {
    isLoading: false,
    error: null,
    employees: [],
    employee: null,
};

const slice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        getEmployeeSuccess(state, action) {
            state.isLoading = false;
            state.employee = action.payload;
        },

        getEmployeesSuccess(state, action) {
            state.isLoading = false;
            state.employees = action.payload;
        },
    },
});

// Reducer
export default slice.reducer;

// Action

export const { getEmployeeSuccess, getEmployeesSuccess } = slice.actions;

export function getEmployees() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await getAllEmployeeApi();
            dispatch(slice.actions.getEmployeesSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
