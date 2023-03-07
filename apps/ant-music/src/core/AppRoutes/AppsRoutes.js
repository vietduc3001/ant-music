import React from 'react';

const Feature = React.lazy(() => import('../../modules/apps/Feature'));
const Department = React.lazy(() => import('../../modules/apps/Department'));
const User = React.lazy(() => import('../../modules/apps/User'));

export const appsConfig = [
  {
    path: '/feature',
    element: <Feature />,
  },
  {
    path: '/department',
    element: <Department />,
  },
  {
    path: '/user',
    element: <User />,
  },
];
