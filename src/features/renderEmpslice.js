// src/features/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const newEmployeeSlice = createSlice({
  name: 'newEmployee',
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees=(action.payload)
    },
  },
});

export const { addEmployee } = newEmployeeSlice.actions;
export const selectEmployees = (state) => state.employee.employees;
export default newEmployeeSlice.reducer;
