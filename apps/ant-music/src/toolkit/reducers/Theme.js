import { GET_THEME } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';
import { themes } from '../../data';

const initialState = {
  themeList: themes,
  totalRecord: themes.length,
};

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_THEME, (state, action) => {
    state.themeList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default themeReducer;
