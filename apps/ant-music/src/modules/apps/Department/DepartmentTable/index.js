import React from 'react';
import PropTypes from 'prop-types';
import { StyledCustomerTable, StyledGroupButton } from '../index.styled';
import { Button } from 'antd';
import { BiEditAlt } from 'react-icons/bi';
import { MdVerifiedUser } from 'react-icons/md';

const CustomerTable = ({
  data,
  loading,
  onEdit,
  onGrantPermission,
  currentPage,
  pageSize,
}) => {
  const Actions = ({ record }) => {
    return (
      <StyledGroupButton>
        <Button
          icon={<BiEditAlt />}
          type='primary'
          onClick={() => onEdit(record)}
          className='edit-button'
        >
          Sửa
        </Button>
        <Button
          icon={<MdVerifiedUser />}
          // type='primary'
          onClick={() => onGrantPermission(record)}
          className='permission-button'
        >
          Cấp quyền
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
      title: 'Tên phòng ban',
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
      title: 'Hành động',
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
    <StyledCustomerTable
      hoverColor
      data={data}
      columns={columns}
      loading={{ spinning: loading, indicator: null }}
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
