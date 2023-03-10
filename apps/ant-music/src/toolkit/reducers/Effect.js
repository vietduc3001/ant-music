import { GET_EFFECT } from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';
import { effects } from '../../data';

const initialState = {
  effectList: effects,
  totalRecord: effects.length,
};

const effectReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_EFFECT, (state, action) => {
    state.effectList = action.payload.data || [];
    state.totalRecord = action.payload.total || 0;
  });
});

export default effectReducer;
