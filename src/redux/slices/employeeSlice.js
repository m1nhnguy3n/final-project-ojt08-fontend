import { createSlice } from '@reduxjs/toolkit';

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

        getProjectSuccess(state, action) {
            state.isLoading = false;
            state.employee = action.payload;
        },

        getProjectsSuccess(state, action) {
            state.isLoading = false;
            state.employees = action.payload;
        },
    },
});

// Reducer
export default slice.reducer;