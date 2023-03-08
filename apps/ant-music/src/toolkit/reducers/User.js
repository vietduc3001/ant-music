import { GET_USER } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  totalRecord: 0,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_USER, (state, action) => {
    state.userList = action.payload.data;
    state.totalRecord = action.payload.total;
  });
});

export default userReducer;
