import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable, StyledGroupButton } from '../index.styled';
import { Button, Space } from 'antd';

const Table = ({ dataSource, loading, onEdit, currentPage, pageSize }) => {
  const Actions = ({ record }) => {
    return (
      <StyledGroupButton>
        <Button
          type='primary'
          onClick={() => onEdit(record)}
          className='edit-button'
        >
          <Space>
            Sửa
            <i className='fa-solid fa-pen-to-square'></i>
          </Space>
        </Button>
      </StyledGroupButton>
    );
  };

  const columns = [
    {
      dataIndex: null,
      title: 'STT',
      align: 'center',
      width: '10%',
      render: (text, record, index) => pageSize * (currentPage - 1) + index + 1,
    },
    {
      title: 'Tên chủ đề',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: '40%',
    },
    {
      title: 'Thao tác',
      dataIndex: 'actions',
      key: 'actions',
      // className: 'customer-table-actions',
      align: 'center',
      fixed: 'right',
      width: '20%',
      render: (text, record) => <Actions record={record} />,
    },
  ];
  return (
    <StyledTable
      hoverColor
      data={dataSource}
      columns={columns}
      loading={{ spinning: loading, indicator: null }}
      scroll={{ x: 'auto' }}
    />
  );
};

export default Table;

Table.defaultProps = {
  featureList: [],
};

Table.propTypes = {
  featureList: PropTypes.array,
  loading: PropTypes.bool,
};
