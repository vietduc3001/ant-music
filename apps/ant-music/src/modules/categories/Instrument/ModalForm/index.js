import React from 'react';

import { Button, Form, Input, Modal } from 'antd';
import { StyledModalForm } from '../index.styled';
import {
  onCreateDepartment,
  onUpdateSelectedDepartment,
} from '../../../../toolkit/actions';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

const ModalForm = ({ dataEdit, isModalVisible, closeModal, getListData }) => {
  const { messages } = useIntl();
  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('🚀 ~ file: index.js:22 ~ onSuccess ~ onSuccess:', onSuccess);
    handleOk();
    getListData();
  };

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
    form.resetFields();
  };

  const handleCancel = () => {
    closeModal();
    form.resetFields();
  };

  const [form] = Form.useForm();

  return (
    <Modal
      title={dataEdit.id ? messages['common.edit'] : messages['common.create']}
      open={isModalVisible}
      onOk={handleOk}
      footer={false}
      onCancel={handleCancel}
    >
      <StyledModalForm
        name='basic'
        initialValues={
          dataEdit
            ? {
                ...dataEdit,
              }
            : {}
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Vui lòng nhập tên nhạc cụ!' }]}
        >
          <Input placeholder='Tên nhạc cụ' />
        </Form.Item>

        <Form.Item
          name='description'
          // rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Mô tả' />
        </Form.Item>

        <Form.Item>
          <Button style={{ float: 'right' }} type='primary' htmlType='submit'>
            Lưu
          </Button>
        </Form.Item>
      </StyledModalForm>
    </Modal>
  );
};

export default ModalForm;
