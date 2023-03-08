import { Button, Input } from 'antd';
import React from 'react';
import AppsHeader from '@ant-music/components/AppsHeader';
import {
  StyledHeader,
  StyledHeaderRight,
  StyledInputView,
  StyledSelectGroup,
} from '../index.styled';
import DepartmentSelect from '../../../../components/Select/DepartmentSelect';
import RoleSelect from '../../../../components/Select/RoleSelect';

const AppHeader = ({ onSearch, showModal, handleChangeFilter }) => {
  return (
    <AppsHeader key={'wrap'}>
      <StyledHeader>
        <StyledInputView>
          <Input
            id='user-name'
            placeholder='Tìm kiếm theo email'
            type='search'
            onChange={onSearch}
            // style={{ width: '200px' }}
          />
        </StyledInputView>
        <StyledSelectGroup>
          <DepartmentSelect
            onChange={(value) => handleChangeFilter(value, 'department')}
          />
          <RoleSelect onChange={(value) => handleChangeFilter(value, 'role')} />
        </StyledSelectGroup>
        <StyledHeaderRight>
          <Button type='primary' onClick={showModal}>
            Thêm người dùng
          </Button>
        </StyledHeaderRight>
      </StyledHeader>
    </AppsHeader>
  );
};

export default AppHeader;
