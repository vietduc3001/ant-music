import { GET_MOOD } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  moodList: [],
  totalRecord: 0,
};

const moodReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_MOOD, (state, action) => {
    state.moodList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default moodReducer;
