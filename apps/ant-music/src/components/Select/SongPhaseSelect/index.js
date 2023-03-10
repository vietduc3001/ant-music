import { Select } from 'antd';
import React from 'react';

const SongStatusSelect = ({ placeholder = 'Vòng kiểm duyệt' }) => {
  return (
    <Select placeholder={placeholder}>
      <Select.Option value={-1}>Không đạt</Select.Option>
      <Select.Option value={1}>Bước 1</Select.Option>
      <Select.Option value={2}>Bước 2</Select.Option>
      <Select.Option value={3}>Bước 3</Select.Option>
      <Select.Option value={4}>Đã đạt</Select.Option>
    </Select>
  );
};

export default SongStatusSelect;
