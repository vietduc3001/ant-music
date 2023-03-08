import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable } from '../index.styled';
import { Button } from 'antd';
import Actions, { StatusButton } from './Actions';

const Table = ({
  dataSource,
  loading,
  onEdit,
  currentPage,
  pageSize,
  onEditPassword,
  onDeleteUser,
}) => {
  const columns = [
    {
      dataIndex: null,
      title: 'STT',
      align: 'center',
      width: '5%',
      fixed: 'left',
      render: (text, record, index) => pageSize * (currentPage - 1) + index + 1,
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      fixed: 'left',
      render: (_, record) => `${record.lastname} ${record.firstname}`,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthday',
      key: 'birthday',
      align: 'center',
      width: '10%',
      responsive: ['lg'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '17%',
      responsive: ['lg'],
    },
    {
      title: 'Phòng ban',
      dataIndex: 'department',
      key: 'department',
      width: '10%',
      render: (cell) => cell?.name || '',
    },
    {
      title: 'Vị trí',
      dataIndex: 'role',
      key: 'role',
      width: '9%',
      render: (cell) => cell?.name || '',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isActive',
      key: 'isActive',
      width: '8%',
      align: 'center',
      responsive: ['lg'],
      render: (cell, record) => <StatusButton cell={cell} record={record} />,
    },
    {
      title: 'Thao tác',
      dataIndex: 'actions',
      key: 'actions',
      // className: 'customer-table-actions',
      fixed: 'right',
      align: 'center',
      width: '10%',
      render: (_, row) => (
        <Actions
          onDeleteUser={onDeleteUser}
          onEditPassword={onEditPassword}
          onEdit={onEdit}
          row={row}
        />
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
