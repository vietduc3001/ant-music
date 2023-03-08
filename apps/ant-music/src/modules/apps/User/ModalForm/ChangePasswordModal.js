import React from 'react';
import { Form, Input, Modal, Row, Col } from 'antd';
import { StyledModalForm, StyledSubmitFormButton } from '../index.styled';
import {
  onUpdateSelectedUser,
  onCreateUser,
} from '../../../../toolkit/actions';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 'auto' },
    sm: { span: 'auto' },
    md: { span: 'auto' },
  },
  colon: false,
  labelAlign: 'left',
  style: { marginBottom: 10 },
};

const ChangePasswordModal = ({ dataEdit, isModalVisible, closeModal }) => {
  const { messages } = useIntl();
  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('🚀 ~ file: index.js:23 ~ onSuccess ~ onSuccess:');
    handleOk();
  };

  const onFinish = (values) => {
    const dataSubmit = {
      ...values,
      parent: values.parent || 0,
    };
    if (dataEdit?.id) {
      console.log('onUpdateSelected:', dataSubmit);
      dispatch(onUpdateSelectedUser(dataEdit?.id, dataSubmit, onSuccess));
    } else {
      console.log('onCreate:', dataSubmit);
      dispatch(onCreateUser(dataSubmit, onSuccess));
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
      title={`Đổi mật khẩu tài khoản ${dataEdit.email}`}
      open={isModalVisible}
      onOk={handleOk}
      footer={false}
      onCancel={handleCancel}
      width={700}
    >
      <StyledModalForm
        name='basic'
        autoComplete='off'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          {...formItemLayout}
          name='newPassword'
          className='form-field'
          rules={[
            {
              required: true,
              message: messages['validation.typePassword'],
            },
          ]}
          label={messages['common.password']}
        >
          <Input.Password placeholder={messages['common.password']} />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name='confirmPassword'
          className='form-field'
          rules={[
            {
              required: true,
              message: messages['validation.reTypePassword'],
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(messages['validation.passwordMisMatch']);
              },
            }),
          ]}
          label={messages['common.retypePassword']}
        >
          <Input.Password placeholder={messages['common.retypePassword']} />
        </Form.Item>

        <Form.Item>
          <StyledSubmitFormButton type='primary' htmlType='submit'>
            Đồng ý
          </StyledSubmitFormButton>
        </Form.Item>
      </StyledModalForm>
    </Modal>
  );
};

export default ChangePasswordModal;
