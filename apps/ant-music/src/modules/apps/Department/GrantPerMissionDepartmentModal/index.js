import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal } from 'antd';
import { StyledFullScreenModal, StyledCustomerTable } from '../index.styled';
import {
  getAllFunctionsByDepartment,
  onUpdateFunctionDepartment,
} from '../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { removeNullChildren, flattenData } from '@ant-music/helpers';
import FunctionTable from './FunctionTable';

const DepartmentModal = ({ dataEdit, isModalVisible, closeModal }) => {
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
    const newData = removeNullChildren([...data]);
    const newDataFlatten = flattenData(newData);
    const newSelectedRowKeys = newDataFlatten
      .filter((item) => item.access === true)
      .map((item) => item.id);
    setDataFunctions(newData);
    setSelectedRowKeys(newSelectedRowKeys);
  }

  const onUpdateFunctionDepartmentSuccess = () => {
    closeModal();
  };

  const handleOk = () => {
    // closeModal();
    console.log('selectedRowKeys', selectedRowKeys);
    dispatch(
      onUpdateFunctionDepartment(
        dataEdit.id,
        selectedRowKeys,
        onUpdateFunctionDepartmentSuccess,
      ),
    );
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

  const handleChangeSelectedRowKeys = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <StyledFullScreenModal
      title={`Cấp quyền cho phòng ${dataEdit.name}`}
      open={isModalVisible}
      onOk={handleOk}
      // footer={false}
      onCancel={handleCancel}
    >
      <FunctionTable
        dataFunctions={dataFunctions}
        columns={columns}
        loading={loading}
        selectedRowKeys={selectedRowKeys}
        handleChangeSelectedRowKeys={handleChangeSelectedRowKeys}
      />
    </StyledFullScreenModal>
  );
};

export default DepartmentModal;
