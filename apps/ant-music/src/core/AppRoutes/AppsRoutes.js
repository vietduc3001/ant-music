import React from 'react';

const Feature = React.lazy(() => import('../../modules/apps/Feature'));

export const appsConfig = [
  {
    path: '/feature',
    element: <Feature />,
  },
];
