/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { useState } from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContentView from '@ant-music/components/AppContentView';
// import AppThemeSetting from '../../AppThemeSetting';
import AppFooter from '../components/AppFooter';
import clsx from 'clsx';
import { FooterType } from '@ant-music/constants/AppEnums';
import { useLayoutContext } from '@ant-music/context/LayoutContextProvider';
import {
  StyledAppLayoutMiniSidebar,
  StyledAppLayoutMiniSidebarMain,
  StyledMainMiniScrollbar,
} from './index.styled';
import PropsTypes from 'prop-types';

const MiniSidebarToggle = ({ routes, routesConfig }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const { footer, footerType } = useLayoutContext();

  const onToggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <StyledAppLayoutMiniSidebar
      className={clsx({
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}
    >
      <AppSidebar isCollapsed={isCollapsed} routesConfig={routesConfig} />
      <StyledAppLayoutMiniSidebarMain className='app-layout-mini-sidebar-main'>
        <AppHeader
          isCollapsed={isCollapsed}
          onToggleSidebar={onToggleSidebar}
        />
        <StyledMainMiniScrollbar>
          <AppContentView routes={routes} />
          <AppFooter />
        </StyledMainMiniScrollbar>
      </StyledAppLayoutMiniSidebarMain>
      {/* <AppThemeSetting /> */}
    </StyledAppLayoutMiniSidebar>
  );
};

export default MiniSidebarToggle;
MiniSidebarToggle.propsTypes = {
  routes: PropsTypes.object.isRequired,
  routesConfig: PropsTypes.array.isRequired,
};
