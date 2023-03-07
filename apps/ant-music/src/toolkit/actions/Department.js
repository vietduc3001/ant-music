import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_DEPARTMENT,
  SHOW_MESSAGE,
} from '@ant-music/constants/ActionTypes';
import jwtAxios from '@ant-music/services/auth/JWT';
import { appIntl } from '@ant-music/helpers';

export const getDepartment = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/department/all', {
        params: { ...filterData },
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_DEPARTMENT, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdateSelectedDepartment = (id, dataUpdate, onSuccess) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .patch(`/department/update/${id}`, dataUpdate)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          if (onSuccess) {
            onSuccess();
          }
          dispatch({
            type: SHOW_MESSAGE,
            payload: res.data?.message,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onCreateDepartment = (dataNew, onSuccess) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/department/create', dataNew)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          // dispatch({ type: GET_FEATURE, payload: {} });
          if (onSuccess) {
            onSuccess();
          }
          dispatch({
            type: SHOW_MESSAGE,
            payload: res.data?.message,
          });
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

export const getAllFunctionsByDepartment = (id, onSuccess) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get(`/department/details/${id}`)
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        onSuccess(data.data);
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
