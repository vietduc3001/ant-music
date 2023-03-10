import { Select } from 'antd';
import React from 'react';
import dayjs from 'dayjs';

const SongDateSelect = ({
  placeholder = '',
  rangeMonth = 6,
  rangeYear = 2,
}) => {
  function getTime(range, type = 'month', format = 'MM/YYYY') {
    if (range) return dayjs().subtract(range, type).format(format);
    return dayjs().format(format);
  }

  return (
    <Select placeholder={placeholder}>
      <Select.Option className='disabled' disabled value={-2}>
        <span style={{ fontWeight: 700 }}>Theo tháng</span>
      </Select.Option>

      {/* Render n tháng gần nhất */}
      {Array(rangeMonth)
        .fill('month')
        .map((_, index) => (
          <Select.Option value={index}>{getTime(index)}</Select.Option>
        ))}

      <Select.Option className='disabled' disabled value={-1}>
        <span style={{ fontWeight: 700 }}>Theo năm</span>
      </Select.Option>
      {/* Render n năm gần nhất */}
      {Array(rangeYear)
        .fill('year')
        .map((_, index) => (
          <Select.Option value={index + rangeMonth}>
            {getTime(index, 'year', 'YYYY')}
          </Select.Option>
        ))}
    </Select>
  );
};

export default SongDateSelect;
