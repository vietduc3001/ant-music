import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_USER,
  SHOW_MESSAGE,
} from '@ant-music/constants/ActionTypes';
import jwtAxios from '@ant-music/services/auth/JWT';
import { appIntl } from '@ant-music/helpers';

export const getUser = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/users/listaccounts', {
        params: filterData,
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_USER, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdateSelectedUser = (id, feature, onSuccess) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post(`/feature/function/${id}`, feature)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: SHOW_MESSAGE,
            payload: res.data?.message,
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
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onCreateUser = (feature, onSuccess) => {
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
            payload: res.data?.message,
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
