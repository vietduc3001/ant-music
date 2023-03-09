import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal, InputNumber } from 'antd';
import { StyledFeatureModalForm } from '../index.styled';
import {
  onCreateFeature,
  onUpdateSelectedFeature,
} from '../../../../toolkit/actions';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import FeatureSelect from '../../../../components/Select/FeatureSelect';

const FeatureModal = ({
  selectedFeature,
  isModalVisible,
  closeModal,
  getListFeatures,
}) => {
  const { messages } = useIntl();
  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('🚀 ~ file: index.js:23 ~ onSuccess ~ onSuccess:');
    handleOk();
    getListFeatures();
  };

  const onFinish = (values) => {
    const dataSubmit = {
      ...values,
      parent: values.parent || 0,
    };
    if (selectedFeature?.id) {
      console.log('onUpdateSelectedFeature:', dataSubmit);
      dispatch(
        onUpdateSelectedFeature(selectedFeature?.id, dataSubmit, onSuccess),
      );
    } else {
      console.log('onCreateFeature:', dataSubmit);
      dispatch(onCreateFeature(dataSubmit, onSuccess));
    }
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
      title={messages['common.create']}
      open={isModalVisible}
      onOk={handleOk}
      footer={false}
      onCancel={handleCancel}
    >
      <StyledFeatureModalForm
        name='basic'
        initialValues={
          selectedFeature
            ? {
                ...selectedFeature,
                parent: selectedFeature.parent || undefined,
              }
            : {}
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Vui lòng nhập tên chức năng!' }]}
        >
          <Input placeholder='Tên chức năng' />
        </Form.Item>

        <Form.Item
          name='parent'
          // rules={[{ required: true, message: 'Vui lòng nhập tên chức năng!' }]}
        >
          <FeatureSelect
            currentFeature={selectedFeature.id}
            width='100%'
            placeholder='Chức năng cấp trên'
          />
        </Form.Item>

        <Form.Item
          name='icon'
          // rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='icon' />
        </Form.Item>

        <Form.Item
          name='pathname'
          rules={[{ required: true, message: 'Vui lòng nhập đường dẫn!' }]}
        >
          <Input placeholder='Đường dẫn' />
        </Form.Item>

        <Form.Item
          name='location'
          rules={[{ required: true, message: 'Vui lòng nhập vị trí!' }]}
        >
          <InputNumber
            style={{ width: '100%' }}
            min={1}
            placeholder='Nhập vị trí'
            step={1}
          />
        </Form.Item>

        <Form.Item>
          <Button style={{ float: 'right' }} type='primary' htmlType='submit'>
            Lưu
          </Button>
        </Form.Item>
      </StyledFeatureModalForm>
    </Modal>
  );
};

export default FeatureModal;
