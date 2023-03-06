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
import AppAnimateGroup from '@ant-music/components/AppAnimateGroup';

const AuthWrapper = ({ children }) => {
  return (
    <StyledAuth>
      <StyledMainAuthScrollbar>
        <AppAnimateGroup
          type='scale'
          animateStyle={{ flex: 1 }}
          delay={0}
          style={{ height: '100%' }}
          interval={10}
          duration={200}
        >
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
        </AppAnimateGroup>
      </StyledMainAuthScrollbar>
    </StyledAuth>
  );
};

export default AuthWrapper;
