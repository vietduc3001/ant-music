import React from 'react';
import {
  StyledAuth,
  StyledAuthCard,
  StyledAuthCardHeader,
  StyledAuthMainContent,
  StyledAuthWelContent,
  StyledAuthWellAction,
  StyledAuthWrap,
  StyledMainAuthScrollbar,
} from './AuthWrapper.styled';
import AppLogo from '@ant-music/components/AppLogo';

const AuthWrapper = ({ children }) => {
  return (
    <StyledAuth>
      <StyledAuthWrap key={'wrap'}>
        <StyledAuthCard>
          {/* <StyledAuthMainContent> */}
          <StyledAuthCardHeader>
            <AppLogo />
          </StyledAuthCardHeader>
          {children}
          {/* </StyledAuthMainContent> */}
          {/* <StyledAuthWellAction>
            <StyledAuthWelContent>
              <h2>Chào mừng đến với Ant Music!</h2>
              <p>Hệ thống quản lý nhạc.</p>
            </StyledAuthWelContent>
          </StyledAuthWellAction> */}
        </StyledAuthCard>
      </StyledAuthWrap>
    </StyledAuth>
  );
};

export default AuthWrapper;
