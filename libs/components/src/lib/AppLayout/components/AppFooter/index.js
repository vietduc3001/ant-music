import React from 'react';
import { useLayoutContext } from '@ant-music/context/LayoutContextProvider';
import {
  StyledFooterBtn,
  StyledFooterBtnView,
  StyledMainFooter,
} from './index.styled';

const AppFooter = () => {
  const { footer } = useLayoutContext();

  if (footer) {
    return (
      <StyledMainFooter>
        <p>Copy right @crema 2021</p>
        <StyledFooterBtnView>
          <StyledFooterBtn type='link' color='primary'>
            Buy Now
          </StyledFooterBtn>
        </StyledFooterBtnView>
      </StyledMainFooter>
    );
  }
  return null;
};

export default AppFooter;
