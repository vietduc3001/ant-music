import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal } from 'antd';
import { StyledFullScreenModal, StyledCustomerTable } from '../index.styled';
import { getAllFunctionsByDepartment } from '../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { removeNullChildren } from '@ant-music/helpers';

const DepartmentModal = ({
  dataEdit,
  isModalVisible,
  closeModal,
  getListData,
}) => {
  const { loading } = useSelector(({ common }) => common);
  const { messages } = useIntl();
  const [dataFunctions, setDataFunctions] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFunctionsByDepartment(dataEdit.id, onSuccess));
  }, []);

  // function

  function onSuccess(data) {
    console.log('🚀 ~ file: index.js:22 ~ onSuccess ~ onSuccess:', data);
    // handleOk();
    // getListData();
    const newData = removeNullChildren([...data]);
    setDataFunctions(newData);
  }

  const onFinish = (values) => {
    const dataSubmit = {
      ...values,
    };
    // if (dataEdit?.id) {
    //   dispatch(onUpdateSelectedDepartment(dataEdit?.id, dataSubmit, onSuccess));
    // } else {
    //   dispatch(onCreateDepartment(dataSubmit, onSuccess));
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleOk = () => {
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  const columns = [
    {
      dataIndex: null,
      title: 'STT',
      align: 'center',
      width: '15%',
      render: (text, record, index) => index + 1,
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
  ];

  const rowSelection = {
    // selectedRowKeys,
    // onSelect: this.onSelectedRowKeysSelect,
    // onSelectAll: this.onSelectAll,
  };

  return (
    <StyledFullScreenModal
      title={`Cấp quyền cho phòng ${dataEdit.name}`}
      open={isModalVisible}
      onOk={handleOk}
      // footer={false}
      onCancel={handleCancel}
    >
      <StyledCustomerTable
        hoverColor
        data={dataFunctions}
        columns={columns}
        loading={loading}
        scroll={{ x: 'auto' }}
        rowSelection={rowSelection}
      />
    </StyledFullScreenModal>
  );
};

export default DepartmentModal;
