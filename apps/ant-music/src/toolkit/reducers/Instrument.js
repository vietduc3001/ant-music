import { GET_INSTRUMENT } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  instrumentList: [],
  totalRecord: 0,
};

const instrumentReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_INSTRUMENT, (state, action) => {
    state.instrumentList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default instrumentReducer;
