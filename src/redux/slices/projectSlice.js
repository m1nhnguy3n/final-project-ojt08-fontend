import { createSlice } from '@reduxjs/toolkit';
import { getAllEmployeeApi } from '../../apis/employee';
import { dispatch } from '../store';
import { getAllProjectsApi } from '../../apis/project';


const initialState = {
    isLoading: false,
    error: null,
    projects: [],
    project: null
};

const slice = createSlice({
    name: 'project',
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

        getProjectSuccess(state, action) {
            state.isLoading = false;
            state.project = action.payload;
        },

        getProjectsSuccess(state, action) {
            state.isLoading = false;
            state.projects = action.payload;
        }
    },
});

// Reducer
export default slice.reducer;

export const { getProjectSuccess, getProjectsSuccess } = slice.actions;

export function getProjects() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await getAllProjectsApi();
            dispatch(slice.actions.getProjectsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}