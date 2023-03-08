import { GET_DEPARTMENT } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  departmentList: [],
  totalRecord: 0,
};

const departmentReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_DEPARTMENT, (state, action) => {
    state.departmentList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default departmentReducer;
