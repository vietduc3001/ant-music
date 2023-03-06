import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_FEATURE,
  UPDATE_FEATURE,
  ADD_FEATURE,
  GET_FEATURE_PARENT,
  SET_FILTER_FEATURE_DATA,
  SHOW_MESSAGE,
} from '@ant-music/constants/ActionTypes';
import jwtAxios from '@ant-music/services/auth/JWT';
import { appIntl } from '@ant-music/helpers';

export const getFeature = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/feature/all-function', {
        params: { filterData },
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_FEATURE, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const getFeatureParent = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/feature/parent', {
        params: { filterData },
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_FEATURE_PARENT, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const setFilters = (filters) => {
  return (dispatch) => {
    dispatch({ type: SET_FILTER_FEATURE_DATA, payload: filters });
  };
};

export const onUpdateSelectedFeature = (id, feature) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .put(`/feature/function/${id}`, { feature })
      .then((data) => {
        // if (data.status === 200) {
        //   dispatch({ type: FETCH_SUCCESS });
        //   dispatch({ type: UPDATE_FEATURE, payload: data.data });
        //   dispatch({
        //     type: SHOW_MESSAGE,
        //     // payload: messages['message.contactUpdated'],
        //   });
        // } else {
        //   dispatch({
        //     type: FETCH_ERROR,
        //     payload: messages['message.somethingWentWrong'],
        //   });
        // }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onCreateFeature = (feature) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/feature/add-function', { feature })
      .then((data) => {
        // if (data.status === 200) {
        //   dispatch({ type: FETCH_SUCCESS });
        //   dispatch({ type: ADD_FEATURE, payload: data.data });
        //   dispatch({
        //     type: SHOW_MESSAGE,
        //     payload: messages['message.contactCreated'],
        //   });
        // } else {
        //   dispatch({
        //     type: FETCH_ERROR,
        //     payload: messages['message.somethingWentWrong'],
        //   });
        // }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
