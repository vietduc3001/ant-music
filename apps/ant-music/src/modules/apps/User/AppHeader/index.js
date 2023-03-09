import { Button, Input, Space } from 'antd';
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
import UserStatusSelect from '../../../../components/Select/UserStatusSelect';
import ChangeStatusAction from './ChangeStatusAction';

const AppHeader = ({
  onSearch,
  showModal,
  handleChangeFilter,
  handleChangeUserStatus,
  selectedUsers,
}) => {
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
          <UserStatusSelect
            onChange={(value) => handleChangeFilter(value, 'status')}
          />
        </StyledSelectGroup>
        <StyledHeaderRight>
          <Space>
            {(selectedUsers.length > 0 && (
              <ChangeStatusAction
                handleChangeUserStatus={handleChangeUserStatus}
              />
            )) ||
              null}
            <Button type='primary' onClick={showModal}>
              Thêm người dùng
            </Button>
          </Space>
        </StyledHeaderRight>
      </StyledHeader>
    </AppsHeader>
  );
};

export default AppHeader;
