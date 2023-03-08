import React from 'react';
import { Button, Dropdown, Select, Tooltip } from 'antd';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillKeyFill, BsTrashFill } from 'react-icons/bs';
import { StyledActionsButton, StyledStatusButton } from '../index.styled';

const styles = {
  '-1': {
    color: '#F44D50',
    backgroundColor: '#FEEEEE',
    border: '#F44D50',
    label: 'Khoá',
  },
  0: {
    color: '#FFA940',
    backgroundColor: '#FFF7EC',
    border: '#FFA940',
    label: 'Chưa xác minh',
  },
  1: {
    color: '#0A8FDC',
    backgroundColor: '#E7F4FC',
    border: '#0A8FDC',
    label: 'Chờ kích hoạt',
  },
  2: {
    color: '#72CC88',
    backgroundColor: '#EDF9F0',
    border: '#72CC88',
    label: 'Kích hoạt',
  },
};

export const StatusButton = ({ cell, record }) => {
  return (
    <StyledStatusButton
      disabled
      suffixIcon={null}
      styles={styles[cell]}
      value={cell}
    >
      {styles[cell].label}
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
      {/* <Tooltip title='Xoá'>
        <Button
          icon={<BsTrashFill />}
          onClick={() => onDeleteUser(row)}
          danger
        />
      </Tooltip> */}
    </StyledActionsButton>
  );
};

export default Actions;
