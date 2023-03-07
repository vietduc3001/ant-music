import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable } from '../index.styled';
import { Button } from 'antd';

const Table = ({ dataSource, loading, onEdit, currentPage, pageSize }) => {
  const columns = [
    {
      dataIndex: null,
      title: 'STT',
      align: 'center',
      width: '10%',
      render: (text, record, index) => pageSize * (currentPage - 1) + index + 1,
    },
    {
      title: 'Biểu tượng',
      dataIndex: 'icon',
      key: 'icon',
      width: '10%',
      align: 'center',
      render: (cell) => <span dangerouslySetInnerHTML={{ __html: cell }} />,
    },
    {
      title: 'Tên chức năng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Đường dẫn',
      dataIndex: 'pathname',
      key: 'pathname',
      width: '20%',
    },
    {
      title: 'Hành động',
      dataIndex: 'actions',
      key: 'actions',
      // className: 'customer-table-actions',
      fixed: 'right',
      width: '10%',
      render: (text, record) => (
        <Button onClick={() => onEdit(record)}>Sửa</Button>
      ),
    },
  ];
  return (
    <StyledTable
      hoverColor
      data={dataSource}
      columns={columns}
      loading={loading}
      scroll={{ x: 'auto' }}
    />
  );
};

export default Table;

Table.defaultProps = {
  dataSource: [],
};

Table.propTypes = {
  dataSource: PropTypes.array,
  loading: PropTypes.bool,
};
