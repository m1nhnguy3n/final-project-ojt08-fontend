import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import projectReducer from './slices/projectSlice';

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        project: projectReducer,
    },
});

const { dispatch } = store;

export { dispatch, store };
