import { createSlice } from '@reduxjs/toolkit';


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