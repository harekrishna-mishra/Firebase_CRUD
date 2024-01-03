// src/features/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: {
    updateEmployee: (state, action) => {
      state.employees=(action.payload)
    },
  },
});

export const { updateEmployee } = employeeSlice.actions;
export const selectEmployees = (state) => state.employee.employees;
export default employeeSlice.reducer;
