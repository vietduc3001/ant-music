import React from 'react';
import AppErrorBoundary from '../AppErrorBoundary';
import { StyledMainContentView } from './index.styled';
import AppSuspense from '@ant-music/components/AppSuspense';
import PropTypes from 'prop-types';

const AppContentView = ({ routes }) => {
  console.log('🚀 ~ file: index.js:8 ~ AppContentView ~ routes:', routes);
  return (
    <StyledMainContentView>
      <AppSuspense>
        <AppErrorBoundary>{routes}</AppErrorBoundary>
      </AppSuspense>
    </StyledMainContentView>
  );
};

export default AppContentView;

AppContentView.propTypes = {
  routes: PropTypes.object.isRequired,
};
