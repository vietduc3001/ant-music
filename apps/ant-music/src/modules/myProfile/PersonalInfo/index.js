import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import AppRowContainer from '@ant-music/components/AppRowContainer';
import { useDropzone } from 'react-dropzone';
import { useAuthUser } from '@ant-music/hooks/AuthHooks';
import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadBtnView,
  StyledInfoUploadContent,
  StyledUserProfileFormTitle,
} from './index.styled';
import { StyledUserProfileGroupBtn } from '../index.styled';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import IntlMessages from '@ant-music/helpers/IntlMessages';

import DepartmentSelect from '../../../components/Select/DepartmentSelect';
import RoleSelect from '../../../components/Select/RoleSelect';

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

const PersonalInfo = () => {
  const { messages } = useIntl();
  const [form] = Form.useForm();
  const { user } = useAuthUser();
  const [isEdit, setIsEdit] = useState(false);

  const [userImage, setUserImage] = useState('/assets/images/placeholder.jpg');

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setUserImage('/assets/images/placeholder.jpg');
  };

  const onFinish = (values) => {
    onCancel();
    console.log('Finish:', values);
  };

  const onCancel = () => {
    form.resetFields();
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        ...user,
        userImage: user.photoURL
          ? user.photoURL
          : '/assets/images/placeholder.jpg',
        birthday: (user.birthday && dayjs(user.birthday)) || dayjs(),
        department: user?.department?.name,
        role: user?.role?.name,
      }}
      validateTrigger='onSubmit'
      form={form}
      requiredMark={false}
      // layout={'vertical'}
    >
      <StyledUserProfileFormTitle>
        <IntlMessages id='userProfile.personalInfo' />
      </StyledUserProfileFormTitle>
      {/* <StyledInfoUpload>
        <StyledInfoUploadAvatar src={userImage} />

        <StyledInfoUploadContent
          style={{ visibility: isEdit ? 'visible' : 'hidden' }}
        >
          <StyledInfoUploadBtnView>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <label htmlFor='icon-button-file'>
                <Button type='primary'>Tải lên</Button>
              </label>
            </div>
            <Button onClick={onReset}>Đặt lại</Button>
          </StyledInfoUploadBtnView>
          <p>Chấp nhận ảnh JPG, GIF or PNG.</p>
        </StyledInfoUploadContent>
      </StyledInfoUpload> */}
      <AppRowContainer>
        <Col xs={24} xl={{ offset: 4, span: 16 }}>
          <Row gutter={60}>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='lastname'
                label={
                  <span>
                    {messages['common.lastName']}&nbsp;
                    <span style={{ color: '#ff4d4f' }}>*</span>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: messages['validation.lastNameRequired'],
                  },
                ]}
              >
                <Input placeholder={messages['common.lastName']} />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='firstname'
                label={
                  <span>
                    {messages['common.firstName']}&nbsp;
                    <span style={{ color: '#ff4d4f' }}>*</span>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: messages['validation.firstNameRequired'],
                  },
                ]}
              >
                <Input placeholder={messages['common.firstName']} />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='birthday'
                label={messages['common.birthday']}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder={messages['common.birthday']}
                  format='DD/MM/YYYY'
                  allowClear={false}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='email'
                label={messages['common.email']}
              >
                <Input disabled placeholder={messages['common.email']} />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                label={messages['common.department']}
                name='department'
                rules={[
                  { required: true, message: messages['validation.select'] },
                ]}
              >
                <DepartmentSelect
                  disabled
                  width='100%'
                  placeholder={messages['common.department']}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                label={messages['common.role']}
                name='role'
                rules={[
                  { required: true, message: messages['validation.select'] },
                ]}
              >
                <RoleSelect
                  disabled
                  width='100%'
                  placeholder={messages['common.role']}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='zalo'
                label='Zalo'
              >
                <Input placeholder='Nhập số điện thoại liên kết Zalo của bạn' />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='facebook'
                label='Facebook'
              >
                <Input placeholder='Nhập link tài khoản facebook' />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                {...formItemLayout}
                className='form-field'
                name='telegram'
                label='Telegram'
              >
                <Input placeholder='Nhập số điện thoại liên kết Telegram của bạn' />
              </Form.Item>
            </Col>
          </Row>
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
    </Form>
  );
};

export default PersonalInfo;
