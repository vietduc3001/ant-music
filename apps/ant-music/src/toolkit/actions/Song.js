import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_SONGS,
} from '@ant-music/constants/ActionTypes';
import { appIntl } from '@ant-music/helpers';
import jwtAxios from '@ant-music/services/axios';
// import jwtAxios from '@ant-music/services/auth/JWT';

export const getSongs = (filterData) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/songs/list', {
        params: { ...filterData },
      })
      .then(({ data }) => {
        console.log('🚀 ~ file: Songs.js:18 ~ .then ~ data:', data);
        dispatch({ type: FETCH_SUCCESS });
        // dispatch({ type: GET_SONGS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
