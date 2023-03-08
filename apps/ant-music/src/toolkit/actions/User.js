import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_USER,
  SHOW_MESSAGE,
} from '@ant-music/constants/ActionTypes';
import jwtAxios from '@ant-music/services/auth/JWT';
import { appIntl } from '@ant-music/helpers';

export const getUserList = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/users/filter-all', {
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

export const getRoleList = (onSuccess) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get(
        '/users/role',
        // {
        //   params: { ...filterData },
        // }
      )
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        if (onSuccess) {
          onSuccess(data.data);
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdateSelectedUser = (id, feature, onSuccess) => {
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
            payload: res.data?.message || messages['message.successfully'],
          });
          if (onSuccess) {
            onSuccess();
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload:
              res.data?.message || messages['message.somethingWentWrong'],
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
      .post('/user/create', feature)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          // dispatch({ type: GET_FEATURE, payload: {} });
          dispatch({
            type: SHOW_MESSAGE,
            payload: res.data?.message || messages['message.successfully'],
          });
          if (onSuccess) {
            onSuccess();
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload:
              res.data?.message || messages['message.somethingWentWrong'],
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

export const onDeleteSelectedUser = (id, onSuccess) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .delete(`/user/delete${id}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({ type: FETCH_SUCCESS });
          // dispatch({ type: GET_FEATURE, payload: {} });
          dispatch({
            type: SHOW_MESSAGE,
            payload: res.data?.message || messages['message.successfully'],
          });
          if (onSuccess) {
            onSuccess();
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload:
              res.data?.message || messages['message.somethingWentWrong'],
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
