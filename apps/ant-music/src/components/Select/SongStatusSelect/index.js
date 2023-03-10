import { Select } from 'antd';
import React from 'react';

const SongStatusSelect = ({ placeholder = 'Trạng thái' }) => {
  return (
    <Select placeholder={placeholder}>
      <Select.Option value={0}>Công khai</Select.Option>
      <Select.Option value={1}>Riêng tư</Select.Option>
    </Select>
  );
};

export default SongStatusSelect;
