import React from 'react';

const Genre = React.lazy(() => import('../../modules/categories/Genre'));
const Effect = React.lazy(() => import('../../modules/categories/Effect'));
const Theme = React.lazy(() => import('../../modules/categories/Theme'));
const Mood = React.lazy(() => import('../../modules/categories/Mood'));
const Instrument = React.lazy(() =>
  import('../../modules/categories/Instrument'),
);

export const categoriesConfig = [
  {
    path: '/genre',
    element: <Genre />,
  },
  {
    path: '/effect',
    element: <Effect />,
  },
  {
    path: '/theme',
    element: <Theme />,
  },
  {
    path: '/mood',
    element: <Mood />,
  },
  {
    path: '/instrument',
    element: <Instrument />,
  },
];
