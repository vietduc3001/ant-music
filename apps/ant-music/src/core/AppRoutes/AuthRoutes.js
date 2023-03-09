import React from 'react';

const Signin = React.lazy(() => import('../../modules/auth/Signin'));
const Signup = React.lazy(() => import('../../modules/auth/Signup'));
const ForgotPassword = React.lazy(() =>
  import('../../modules/auth/ForgetPassword'),
);
const ConfirmationEmail = React.lazy(() =>
  import('../../modules/auth/ConfirmationEmail'),
);
const Blocked = React.lazy(() => import('../../modules/auth/Blocked'));
// const ConfirmSignupAwsCognito = React.lazy(() =>
//   import('../../modules/auth/Signup/ConfirmSignupAwsCognito')
// );
// const ResetPasswordAwsCognito = React.lazy(() =>
//   import('../../modules/auth/ForgetPassword/ResetPasswordAwsCognito')
// );
export const authRouteConfig = [
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },
  {
    path: '/confirmation-email',
    element: <ConfirmationEmail />,
  },
  {
    path: '/blocked',
    element: <Blocked />,
  },
  // {
  //   path: '/confirm-signup',
  //   element: <ConfirmSignupAwsCognito />,
  // },
  // {
  //   path: '/reset-password',
  //   element: <ResetPasswordAwsCognito />,
  // },
];
