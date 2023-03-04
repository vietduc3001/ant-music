import React from 'react';
import { Provider } from 'react-redux';
import AppLayout from './core/AppLayout';
import { GlobalStyles } from './core/theme/GlobalStyle';
import { Normalize } from 'styled-normalize';
import AppContextProvider from '@ant-music/context/AppContextProvider';
import AppThemeProvider from '@ant-music/context/AppThemeProvider';
import AppAuthProvider from './core/AppAuthProvider';
import configureStore from './toolkit/store';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from '@ant-music/components/AuthRoutes';
import AppLocaleProvider from '@ant-music/context/AppLocaleProvider';

const store = configureStore();

const App = () => {
  return (
    <AppContextProvider>
      <Provider store={store}>
        <AppThemeProvider>
          <AppLocaleProvider>
            <BrowserRouter>
              <AppAuthProvider>
                <AuthRoutes>
                  <GlobalStyles />
                  <Normalize />
                  <AppLayout />
                </AuthRoutes>
              </AppAuthProvider>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppThemeProvider>
      </Provider>
    </AppContextProvider>
  );
};

export default App;
