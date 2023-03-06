import React from 'react';
import { Navigate } from 'react-router-dom';

import { authRouteConfig } from './AuthRoutes';
import Error403 from '../../modules/errorPages/Error403';
import { errorPagesConfigs } from './ErrorPagesRoutes';
import { accountPagesConfigs } from './AccountRoutes';
import { appsConfig } from './AppsRoutes';
import { initialUrl, guestUrl } from '@ant-music/constants/AppConst';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [...accountPagesConfigs, ...appsConfig],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '/',
      element: <Navigate to={guestUrl} />,
    },
    {
      path: '*',
      element: <Navigate to='/signin' />,
    },
  ]),
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
