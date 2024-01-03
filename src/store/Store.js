import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/employeeSlice';
import newEmployeeReducer from "./features/renderEmpslice"

export const Store = configureStore({
  reducer: {
    employees: employeeReducer,
    newEmployees: newEmployeeReducer,
  },
});
