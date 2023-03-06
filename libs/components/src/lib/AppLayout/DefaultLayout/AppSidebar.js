import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useSidebarContext } from '@ant-music/context/SidebarContextProvider';
import {
  StyledMiniSidebarScrollbar,
  StyledMiniSidebarToggle,
} from './index.styled';
import { useAuthUser } from '@ant-music/hooks/AuthHooks';

const AppSidebar = ({ isCollapsed, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();
  const { dataMenuCurrentUser } = useAuthUser();
  console.log(
    '🚀 ~ file: AppSidebar.js:16 ~ AppSidebar ~ dataMenuCurrentUser:',
    dataMenuCurrentUser,
  );

  return (
    <StyledMiniSidebarToggle
      className={clsx({
        'mini-sidebar-toggle-img-background': allowSidebarBgImage,
      })}
      collapsible
      breakpoint='xl'
      collapsedWidth='0'
      collapsed={isCollapsed}
    >
      <UserInfo hasColor />
      <StyledMiniSidebarScrollbar scrollToTop={false}>
        <AppVerticalMenu
          dataMenuCurrentUser={dataMenuCurrentUser}
          routesConfig={routesConfig}
        />
      </StyledMiniSidebarScrollbar>
    </StyledMiniSidebarToggle>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  isCollapsed: PropTypes.bool,
};
