import React, { useEffect } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '@ant-music/context/LayoutContextProvider';
import AuthWrapper from './AuthWrapper';
import AppContentView from '@ant-music/components/AppContentView';
import generateRoutes from '@ant-music/helpers/RouteGenerator';
import { useAuthUser } from '@ant-music/hooks/AuthHooks';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../AppRoutes';
import { useRoutes } from 'react-router-dom';
import { Layouts } from '@ant-music/components/AppLayout';

const AppLayout = () => {
  const { navStyle } = useLayoutContext();
  const { user, isAuthenticated } = useAuthUser();
  console.log(
    '🚀 ~ file: index.js:20 ~ AppLayout ~ isAuthenticated:',
    isAuthenticated,
  );
  const AppLayout = Layouts[navStyle];
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    unAuthorizedStructure,
    authorizedStructure,
    anonymousStructure,
  });
  console.log(
    '🚀 ~ file: index.js:27 ~ AppLayout ~ generatedRoutes:',
    generatedRoutes,
  );
  // const routes = useRoutes(generatedRoutes);
  console.log(
    '🚀 ~ file: index.js:28 ~ AppLayout ~ generatedRoutes:',
    generatedRoutes,
  );

  return (
    {
      isAuthenticated ? <> :<AuthWrapper>
      <AppContentView
      // routes={routes}
      />
    </AuthWrapper>
    }
    
  );
};

export default AppLayout;
