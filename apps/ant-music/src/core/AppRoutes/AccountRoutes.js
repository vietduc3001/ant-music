import React from 'react';
import { RoutePermittedRole } from '@ant-music/constants/AppEnums';
import Account from '../../modules/account/MyProfile';

export const accountPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-profile',
    element: <Account />,
  },
];
