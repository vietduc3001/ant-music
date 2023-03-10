import React from 'react';

const Songs = React.lazy(() => import('../../modules/contents/Songs'));

export const contentsConfig = [
  {
    path: ['/songs'],
    element: <Songs />,
  },
];
