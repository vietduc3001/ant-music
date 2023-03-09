import { Select } from 'antd';
import React from 'react';

const UserStatusSelect = ({
  onChange,
  width = '200px',
  placeholder = 'Chọn trạng thái',
  allowClear = true,
}) => {
  return (
    <Select
      style={{ width }}
      placeholder={placeholder}
      onChange={onChange}
      allowClear={allowClear}
    >
      <Select.Option value='-1'>Khoá tài khoản</Select.Option>
      <Select.Option value='0'>Chưa xác minh email</Select.Option>
      <Select.Option value='1'>Chưa kích hoạt</Select.Option>
      <Select.Option value='-2'>Kích hoạt</Select.Option>
    </Select>
  );
};

export default UserStatusSelect;
