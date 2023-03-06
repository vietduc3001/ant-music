import React from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import OrderActions from './OrderActions';
import { StyledCustomerTable } from '../index.styled';
import { Button } from 'antd';

const CustomerTable = ({ featureList, loading, onEditFeature }) => {
  const columns = [
    {
      dataIndex: null,
      title: 'STT',
      align: 'center',
      width: 100,
      render: (text, record, index) => index,
    },
    {
      title: 'Tên chức năng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Hành động',
      dataIndex: 'actions',
      key: 'actions',
      // className: 'customer-table-actions',
      fixed: 'right',
      width: 200,
      render: (text, record) => (
        <Button onClick={() => onEditFeature(record)}>Sửa</Button>
      ),
    },
  ];
  return (
    <StyledCustomerTable
      hoverColor
      data={featureList}
      columns={columns}
      loading={loading}
      scroll={{ x: 'auto' }}
    />
  );
};

export default CustomerTable;

CustomerTable.defaultProps = {
  featureList: [],
};

CustomerTable.propTypes = {
  featureList: PropTypes.array,
  loading: PropTypes.bool,
};
