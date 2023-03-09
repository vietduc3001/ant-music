import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import jwtAxios, { setAuthToken } from './index';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({
  children,
  fetchStart,
  fetchSuccess,
  fetchError,
}) => {
  const navigate = useNavigate();

  const [jwtAuthData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    dataMenuCurrentUser: [],
  });

  // const getCurrentUser = jwtAxios.get('/users/info');
  // const getMenuUser = jwtAxios.get('/feature/function-user');

  useEffect(() => {
    const getAuthUser = () => {
      fetchStart();
      const token = localStorage.getItem('token');

      if (!token) {
        fetchSuccess();
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token);
      axios
        .all([
          jwtAxios.get('/users/info'),
          jwtAxios.get('/feature/function-user'),
        ])
        .then((res) => {
          fetchSuccess();
          const dataCurrentUser = res[0]?.data || {};
          const dataMenuUser = res[1]?.data || {};
          setJWTAuthData({
            ...jwtAuthData,
            user:
              (dataCurrentUser.data?.length > 0 && dataCurrentUser.data[0]) ||
              {},
            isLoading: false,
            isAuthenticated: true,
            dataMenuCurrentUser: dataMenuUser?.data || [],
          });
        })
        .catch(() => {
          setJWTAuthData({
            user: undefined,
            isLoading: false,
            isAuthenticated: false,
            dataMenuCurrentUser: [],
          });
          fetchSuccess();
        });
    };

    getAuthUser();
  }, []);

  const signInUser = async ({ email, password }) => {
    fetchStart();
    try {
      const { data } = await jwtAxios.post('auth/login', { email, password });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/users/info');
      const resMenuUser = await jwtAxios.get('/feature/function-user');
      const dataMenuCurrentUser = resMenuUser?.data?.data || [];
      const user = (res?.data?.data?.length > 0 && res?.data?.data[0]) || {};
      setJWTAuthData({
        user,
        isAuthenticated: true,
        isLoading: false,
        dataMenuCurrentUser,
      });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...jwtAuthData,
        isAuthenticated: false,
        isLoading: false,
        dataMenuCurrentUser: [],
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const sendMailForgetPassword = async ({ email }) => {
    fetchStart();
    try {
      const response = await jwtAxios
        .post('auth/login', { email })
        .catch((error) => console.log(error));
      console.log(
        '🚀 ~ file: JWTAuthProvider.js:113 ~ sendMailForgetPassword ~ response:',
        response,
      );
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);
        setJWTAuthData({
          // user: res.data,
          isAuthenticated: true,
          isLoading: false,
        });
      }
      // const res = await jwtAxios.get('/auth/login');
      fetchSuccess();
    } catch (error) {
      console.log(
        '🚀 ~ file: JWTAuthProvider.js:129 ~ sendMailForgetPassword ~ error:',
        error,
      );
      setJWTAuthData({
        ...jwtAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
      // if (response.status === 404) {
      //   navigate('/confirmation-email');
      // } else if (response.status === 403) {
      //   navigate('/blocked');
      // }
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const signUpUser = async (values) => {
    console.log(
      '🚀 ~ file: JWTAuthProvider.js:131 ~ signUpUser ~ values:',
      values,
    );
    fetchStart();
    try {
      const response = await jwtAxios.post('auth/register', {
        ...values,
        birthday: moment(values.birthday).format('DD/MM/YYYY'),
      });
      console.log(
        '🚀 ~ file: JWTAuthProvider.js:141 ~ signUpUser ~ response:',
        response,
      );
      if (response.status >= 200 && response.status < 300) {
        navigate('/confirmation-email');
      } else {
        fetchError(response?.data?.message || 'Something went wrong');
      }
      // localStorage.setItem('token', data.token);
      // setAuthToken(data.token);
      // const res = await jwtAxios.get('/auth/register');
      // setJWTAuthData({
      //   user: res.data,
      //   isAuthenticated: true,
      //   isLoading: false,
      // });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...jwtAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error);
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...jwtAuthData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
          sendMailForgetPassword,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
