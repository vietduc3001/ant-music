import React from 'react';
import dayjs from 'dayjs';
import { Form, Input, Modal, Row, Col, DatePicker } from 'antd';
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

const dateFormat = 'DD/MM/YYYY';

const ModalForm = ({ dataEdit, isModalVisible, closeModal, getListData }) => {
  const { messages } = useIntl();
  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('🚀 ~ file: index.js:23 ~ onSuccess ~ onSuccess:');
    handleOk();
    getListData();
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
      title={dataEdit.id ? messages['common.edit'] : messages['common.create']}
      open={isModalVisible}
      onOk={handleOk}
      footer={false}
      onCancel={handleCancel}
      width={700}
    >
      <StyledModalForm
        name='basic'
        autoComplete='off'
        initialValues={
          dataEdit
            ? {
                ...dataEdit,
                birthday:
                  (dataEdit.birthday && dayjs(dataEdit.birthday, dateFormat)) ||
                  dayjs(),
              }
            : {
                birthday: dayjs(),
              }
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          {...formItemLayout}
          className='form-field'
          name='lastname'
          label={messages['common.lastName']}
          rules={[
            {
              required: true,
              message: messages['validation.lastNameRequired'],
            },
          ]}
        >
          <Input placeholder={messages['common.lastName']} />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          className='form-field'
          name='firstname'
          label={messages['common.firstName']}
          rules={[
            {
              required: true,
              message: messages['validation.firstNameRequired'],
            },
          ]}
        >
          <Input placeholder={messages['common.firstName']} />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          className='form-field'
          label={messages['common.email']}
          name='email'
          rules={[{ required: true, message: 'Please input your Phone!' }]}
        >
          <Input placeholder={messages['common.email']} />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          className='form-field'
          // name='birthday'
          label={messages['common.birthday']}
        >
          <DatePicker
            style={{ width: '100%' }}
            format='DD/MM/YYYY'
            placeholder={messages['common.birthday']}
          />
        </Form.Item>

        <Row gutter={15}>
          <Col hidden={dataEdit?.id} xs={24}>
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
                    return Promise.reject(
                      messages['validation.passwordMisMatch'],
                    );
                  },
                }),
              ]}
              label={messages['common.retypePassword']}
            >
              <Input.Password placeholder={messages['common.retypePassword']} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <StyledSubmitFormButton type='primary' htmlType='submit'>
            Lưu
          </StyledSubmitFormButton>
        </Form.Item>
      </StyledModalForm>
    </Modal>
  );
};

export default ModalForm;
