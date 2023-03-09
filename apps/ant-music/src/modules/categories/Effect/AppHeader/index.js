import { Button, Input, Space } from 'antd';
import React from 'react';
import AppsHeader from '@ant-music/components/AppsHeader';
import {
  StyledHeader,
  StyledHeaderRight,
  StyledInputView,
} from '../index.styled';

const AppHeader = ({ onSearch, showModal }) => {
  return (
    <AppsHeader key={'wrap'}>
      <StyledHeader>
        <StyledInputView>
          <Input
            id='user-name'
            placeholder='Tìm kiếm'
            type='search'
            onChange={onSearch}
            // style={{ width: '200px' }}
          />
        </StyledInputView>
        <StyledHeaderRight>
          <Button type='primary' onClick={showModal}>
            Thêm hiệu ứng
          </Button>
        </StyledHeaderRight>
      </StyledHeader>
    </AppsHeader>
  );
};

export default AppHeader;
