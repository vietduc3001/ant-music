import React from 'react';
import { Button, Dropdown, Select, Tooltip } from 'antd';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillKeyFill, BsTrashFill } from 'react-icons/bs';
import { StyledActionsButton, StyledStatusButton } from '../index.styled';

const styles = {
  '-1': {
    color: 'white',
    backgroundColor: '#f5222d',
  },
  0: {
    color: 'white',
    backgroundColor: '#bfbfbf',
  },
  1: {
    color: 'white',
    backgroundColor: '#faad14',
  },
  2: {
    color: 'white',
    backgroundColor: '#389e0d',
  },
};

export const StatusButton = ({ cell, record }) => {
  return (
    <StyledStatusButton styles={styles[cell]} value={cell}>
      <Select.Option className='block' value={-1}>
        Khoá
      </Select.Option>
      <Select.Option disabled className='pending-verify' value={0}>
        Chưa xác minh
      </Select.Option>
      <Select.Option disabled className='pending-active' value={1}>
        Chờ kích hoạt
      </Select.Option>
      <Select.Option className='active' value={2}>
        Kích hoạt
      </Select.Option>
    </StyledStatusButton>
  );
};

const items = [
  { key: 1, label: <span style={{ fontSize: 14 }}>View Order</span> },
  { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span> },
  { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span> },
];

// const Actions = () => {
//   return (
//     <Dropdown menu={{ items }} trigger={['click']}>
//       <Button type='circle'>
//         <MoreOutlined />
//       </Button>
//     </Dropdown>
//   );
// };

const Actions = ({ row, onEditPassword, onEdit, onDeleteUser }) => {
  return (
    <StyledActionsButton>
      <Tooltip title='Sửa'>
        <Button
          type='primary'
          icon={<AiFillEdit />}
          onClick={() => onEdit(row)}
          ghost
        />
      </Tooltip>
      <Tooltip title='Đổi mật khẩu'>
        <Button
          type='primary'
          icon={<BsFillKeyFill />}
          onClick={() => onEditPassword(row)}
          ghost
        />
      </Tooltip>
      <Tooltip title='Xoá'>
        <Button
          icon={<BsTrashFill />}
          onClick={() => onDeleteUser(row)}
          danger
        />
      </Tooltip>
    </StyledActionsButton>
  );
};

export default Actions;
