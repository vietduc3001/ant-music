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
      const { data } = await jwtAxios.post('auth/login', { email });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      // const res = await jwtAxios.get('/auth/login');
      setJWTAuthData({
        // user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...jwtAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const signUpUser = async ({
    lastName,
    firstName,
    email,
    password,
    birthday,
  }) => {
    fetchStart();
    try {
      const { data } = await jwtAxios.post('auth/register', {
        lastname: lastName,
        firstname: firstName,
        email,
        password,
        birthday: moment(birthday).format('DD/MM/YYYY'),
      });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth/register');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...jwtAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error.response.data.error);
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
