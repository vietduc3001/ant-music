import { Select } from 'antd';
import React from 'react';

const SongStatusSelect = ({ placeholder = 'Tình trạng phát hành' }) => {
  return (
    <Select placeholder={placeholder}>
      <Select.Option value={0}>Chưa phát hành</Select.Option>
      <Select.Option value={1}>Đã phát hành</Select.Option>
    </Select>
  );
};

export default SongStatusSelect;
