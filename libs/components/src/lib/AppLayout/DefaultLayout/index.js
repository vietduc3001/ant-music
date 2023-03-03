import React from 'react';
import { useAuthMethod, useAuthUser } from '@ant-music/hooks/AuthHooks';

const DefaultLayout = () => {
  const { logout } = useAuthMethod();
  return (
    <div>
      <h1>DefaultLayout</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DefaultLayout;
