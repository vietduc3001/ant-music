// ForJWT Auth
import { getUserFromJwtAuth } from '@ant-music/helpers/AuthHelper';
import {
  useJWTAuth,
  useJWTAuthActions,
} from '@ant-music/services/auth/JWTAuthProvider';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading, dataMenuCurrentUser } =
    useJWTAuth();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromJwtAuth(user),
    dataMenuCurrentUser,
  };
};

export const useAuthMethod = () => {
  const { signInUser, signUpUser, logout, sendMailForgetPassword } =
    useJWTAuthActions();

  return {
    signInUser,
    logout,
    signUpUser,
    sendMailForgetPassword,
  };
};

//For Firebase Auth

// import {
//   useFirebase,
//   useFirebaseActions,
// } from '@ant-music/services/auth/FirebaseAuthProvider';
// import { getUserFromFirebase } from '@ant-music/helpers/AuthHelper';

// export const useAuthUser = () => {
//   const { user, isAuthenticated, isLoading } = useFirebase();
//   // console.log(
//   //   '🚀 ~ file: AuthHooks.js:36 ~ useAuthUser ~ useFirebase:',
//   //   useFirebase(),
//   // );
//   return {
//     isLoading,
//     isAuthenticated,
//     user: getUserFromFirebase(user),
//   };
// };

// export const useAuthMethod = () => {
//   const {
//     logInWithEmailAndPassword,
//     registerUserWithEmailAndPassword,
//     logInWithPopup,
//     logout,
//   } = useFirebaseActions();

//   return {
//     logInWithEmailAndPassword,
//     registerUserWithEmailAndPassword,
//     logInWithPopup,
//     logout,
//   };
// };

/*
// For AWS Auth
import { getUserFromAWS } from '@crema/helpers/AuthHelper';
import {
  useAwsCognito,
  useAwsCognitoActions,
} from '@crema/services/auth/AWSAuthProvider';

export const useAuthUser = () => {
  const { auth, user, isAuthenticated, isLoading } = useAwsCognito();
  return {
    auth,
    isLoading,
    isAuthenticated,
    user: getUserFromAWS(user),
  };
};

export const useAuthMethod = () => {
  const { signIn, signUpCognitoUser, confirmCognitoUserSignup, logout } =
    useAwsCognitoActions();

  return {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  };
};*/
/*

//For Auth0
import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { getUserFromAuth0 } from '@crema/helpers/AuthHelper';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return {
    isLoading,
    isAuthenticated,
    user: useMemo(() => getUserFromAuth0(user), []),
  };
};

export const useAuthMethod = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return { loginWithRedirect, logout };
};
*/
