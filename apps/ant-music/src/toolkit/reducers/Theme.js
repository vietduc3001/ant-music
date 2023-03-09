import { GET_THEME } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  themeList: [],
  totalRecord: 0,
};

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_THEME, (state, action) => {
    state.themeList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default themeReducer;
