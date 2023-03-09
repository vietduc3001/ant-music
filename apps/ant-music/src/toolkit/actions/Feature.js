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
      .get('/feature/search-function', {
        params: filterData,
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_FEATURE, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error?.response?.data?.message || error.message,
        });
      });
  };
};

export const getAllFeature = (onSuccess) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/feature/page')
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        if (onSuccess) {
          onSuccess(data.data);
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error?.response?.data?.message || error.message,
        });
      });
  };
};

export const onUpdateSelectedFeature = (id, feature, onSuccess) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post(`/feature/function/${id}`, feature)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: SHOW_MESSAGE,
            payload:
              res.data?.message || messages['message.updateSuccessfully'],
          });
          if (onSuccess) {
            onSuccess();
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: res.data?.message,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error?.response?.data?.message || error.message,
        });
      });
  };
};

export const onCreateFeature = (feature, onSuccess) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/feature/add-function', feature)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          // dispatch({ type: GET_FEATURE, payload: {} });
          dispatch({
            type: SHOW_MESSAGE,
            payload:
              res.data?.message || messages['message.createSuccessfully'],
          });
          if (onSuccess) {
            onSuccess();
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error?.response?.data?.message || error.message,
        });
      });
  };
};
