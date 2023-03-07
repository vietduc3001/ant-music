import { GET_DEPARTMENT } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  departmentList: [],
};

const departmentReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_DEPARTMENT, (state, action) => {
    state.departmentList = action.payload;
  });
});

export default departmentReducer;
