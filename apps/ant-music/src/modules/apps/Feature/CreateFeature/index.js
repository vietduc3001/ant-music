import React from 'react';

import { Button, Form, Input } from 'antd';
import { StyledEditCustomerForm } from '../index.styled';
import SelectFeature from '../SelectFeature';
import {
  onCreateFeature,
  onUpdateSelectedFeature,
} from '../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';

const EditCustomer = ({ form, selectedFeature }) => {
  const onFinish = (values) => {
    const dataSubmit = {
      ...values,
      parent: values.parent || 0,
    };
    if (selectedFeature?.id) {
      onUpdateSelectedFeature(selectedFeature?.id, dataSubmit);
    } else {
      onCreateFeature(dataSubmit);
    }
    console.log('Success:', dataSubmit);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledEditCustomerForm
      name='basic'
      initialValues={{
        ...selectedFeature,
      }}
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
        <SelectFeature placeholder='Chức năng cấp trên' />
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

      <Form.Item>
        <Button style={{ float: 'right' }} type='primary' htmlType='submit'>
          Lưu
        </Button>
      </Form.Item>
    </StyledEditCustomerForm>
  );
};

export default EditCustomer;
