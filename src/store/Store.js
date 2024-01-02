import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employeeSlice';

export const Store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
