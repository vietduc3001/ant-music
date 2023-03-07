import {
  GET_FEATURE,
  UPDATE_FEATURE,
  ADD_FEATURE,
  GET_FEATURE_PARENT,
  SET_FILTER_FEATURE_DATA,
} from '@ant-music/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  featureList: [],
  featureParentList: [],
  currentFeature: null,
  totalRecord: 0,
  filterData: {
    name: '',
  },
  dataEdit: {},
};

const featureReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_FEATURE, (state, action) => {
      state.featureList = action.payload.data;
      state.totalRecord = action.payload.total;
    })
    .addCase(GET_FEATURE_PARENT, (state, action) => {
      state.featureParentList = action.payload;
    })
    // .addCase(SET_PRODUCT_VIEW_TYPE, (state, action) => {
    //   state.viewType = action.payload;
    // })
    .addCase(SET_FILTER_FEATURE_DATA, (state, action) => {
      state.filterData = action.payload;
    })
    .addCase('setDataEditFeature', (state, action) => {
      state.dataEdit = action.payload;
    });
  // .addCase(SET_PRODUCT_DATA, (state, action) => {
  //   state.currentProduct = action.payload;
  // })
  // .addCase(GET_RECENT_ORDER, (state, action) => {
  //   state.recentOrders = action.payload.data;
  //   state.orderCount = action.payload.count;
  // })
  // .addCase(SET_CART_ITEMS, (state, action) => {
  //   state.cartItems = action.payload;
  // })
  // .addCase(UPDATE_CART_ITEM, (state, action) => {
  //   state.cartItems = state.cartItems.map((item) =>
  //     item.id === action.payload.id ? action.payload : item,
  //   );
  // })
});

export default featureReducer;
