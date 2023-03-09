import React from 'react';
import { Button, Dropdown, message, Space } from 'antd';
import { FaAngleDown } from 'react-icons/fa';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: 'Khoá tài khoản',
    key: '-1',
  },
  {
    label: 'Kích hoạt',
    key: '2',
  },
];

const ChangeStatusAction = ({ handleChangeUserStatus }) => {
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleChangeUserStatus,
      }}
      trigger={['click']}
    >
      <Button type='primary' ghost>
        <Space>
          Cập nhật trạng thái
          <FaAngleDown />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default ChangeStatusAction;
