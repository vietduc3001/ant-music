import React, { useRef } from 'react';
import { Button, Col, Form, Input } from 'antd';
import AppRowContainer from '@ant-music/components/AppRowContainer';
import IntlMessages from '@ant-music/helpers/IntlMessages';
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from './index.styled';
import { useIntl } from 'react-intl';
import { validatePassword } from '@ant-music/helpers';

const formItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sm: { span: 5 },
    md: { span: 5 },
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

const ChangePassword = () => {
  const { messages } = useIntl();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formRef = useRef();

  console.log('formRef', formRef.current);

  const onCancel = () => {
    formRef.current.resetFields();
  };

  return (
    <StyledUserProfileForm
      initialValues={{ oldPassword: '', password: '', confirmPassword: '' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      ref={formRef}
    >
      <StyledUserProfileFormTitle>
        <IntlMessages id='userProfile.changePassword' />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} xl={{ offset: 4, span: 16 }}>
          <Form.Item
            {...formItemLayout}
            label={messages['common.oldPassword']}
            name='oldPassword'
            rules={[
              {
                required: true,
                message: messages['validation.enterOldPassword'],
              },
            ]}
          >
            <Input.Password placeholder={messages['common.oldPassword']} />
          </Form.Item>
        </Col>
        <Col xs={24} xl={{ offset: 4, span: 16 }}>
          <Form.Item
            {...formItemLayout}
            label={messages['common.newPassword']}
            name='password'
            rules={[
              {
                required: true,
                message: messages['validation.enterNewPassword'],
              },
              {
                validator: (rule, value, callback) =>
                  validatePassword(
                    rule,
                    value,
                    callback,
                    messages['validation.passwordFormat'],
                  ),
              },
            ]}
          >
            <Input.Password placeholder={messages['common.newPassword']} />
          </Form.Item>
        </Col>
        <Col xs={24} xl={{ offset: 4, span: 16 }}>
          <Form.Item
            {...formItemLayout}
            label={messages['common.retypePassword']}
            name='confirmPassword'
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
                  return Promise.reject(
                    messages['validation.passwordMisMatch'],
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder={messages['common.retypePassword']} />
          </Form.Item>
        </Col>
        <Col xs={24} xl={{ offset: 4, span: 16 }}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className='user-profile-group-btn'
          >
            <Button type='primary' htmlType='submit'>
              Cập nhật thông tin
            </Button>
            <Button htmlType='cancel' onClick={onCancel}>
              Huỷ thay đổi
            </Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </StyledUserProfileForm>
  );
};

export default ChangePassword;
