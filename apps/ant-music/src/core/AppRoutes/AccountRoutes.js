import React from 'react';
// import { RoutePermittedRole } from '@ant-music/constants/AppEnums';
import Account from '../../modules/myProfile';

export const accountPagesConfigs = [
  {
    // permittedRole: RoutePermittedRole.User,
    path: '/my-profile',
    element: <Account />,
  },
];
