import React from 'react';
import PropTypes from 'prop-types';
import { useSidebarContext } from '@ant-music/context/SidebarContextProvider';
import { StyledAppLogo } from './index.styled';

const AppLogo = ({ hasSidebarColor, style }) => {
  const { sidebarColorSet } = useSidebarContext();
  return (
    <StyledAppLogo style={style}>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <img
          src='/assets/images/logo-white-with-name.png'
          alt='ant-music-logo'
        />
      ) : (
        <img src='/assets/images/logo-with-name.jpg' alt='ant-music-logo' />
      )}
    </StyledAppLogo>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
