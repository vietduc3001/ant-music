import { GET_GENRE } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  genreList: [],
  totalRecord: 0,
};

const genreReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_GENRE, (state, action) => {
    state.genreList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default genreReducer;
