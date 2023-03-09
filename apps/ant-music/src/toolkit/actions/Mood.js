import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_MOOD,
  SHOW_MESSAGE,
} from '@ant-music/constants/ActionTypes';
import jwtAxios from '@ant-music/services/auth/JWT';
import { appIntl } from '@ant-music/helpers';

export const getMoodList = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/department/list', {
        params: { ...filterData },
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_MOOD, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
