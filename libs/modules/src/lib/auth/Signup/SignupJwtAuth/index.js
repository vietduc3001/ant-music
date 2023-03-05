import React, { useRef } from 'react';
import { Checkbox, Col, DatePicker, Form, Input, Row } from 'antd';
import IntlMessages from '@ant-music/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import { useAuthMethod } from '@ant-music/hooks/AuthHooks';
import {
  StyledSignLinkTag,
  StyledSignUp,
  StyledSignUpBtn,
  StyledSignupCheckBox,
  StyledSignUpContent,
  StyledSignUpForm,
  StyledSignupLink,
  StyledSignUpTestGrey,
} from './index.styled';
import {
  TextField,
  TextFieldPassword,
} from '@ant-music/components/CustomComponents';

const SignupJwtAuth = () => {
  const formRef = useRef(null);
  const { messages } = useIntl();
  const { signUpUser } = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    formRef.current
      .validateFields()
      .then((values) => {
        console.log('🚀 ~ file: index.js:30 ~ onFinish ~ values:', values);
        signUpUser(values);
      })
      .catch(({ errorFields }) => {
        if (errorFields?.length > 0) {
          formRef.current.scrollToField(errorFields[0].name);
        }
      });
    //
  };

  return (
    <StyledSignUp>
      <StyledSignUpContent>
        <StyledSignUpForm
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          ref={formRef}
        >
          <Row gutter={10}>
            <Col xs={24} md={12}>
              <Form.Item
                name='lastName'
                className='form-field'
                rules={[
                  {
                    required: true,
                    message: messages['validation.passwordRequired'],
                  },
                ]}
              >
                <Input placeholder={messages['common.lastName']} />
                {/* <TextField
                  name='signup-lastName'
                  label={messages['common.lastName']}
                /> */}
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name='firstName'
                className='form-field'
                rules={[
                  {
                    required: true,
                    message: messages['validation.firstNameRequired'],
                  },
                ]}
              >
                <Input placeholder={messages['common.firstName']} />
                {/* <TextField
                  name='signup-firstName'
                  label={messages['common.firstName']}
                /> */}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name='email'
            className='form-field'
            rules={[
              { required: true, message: messages['validation.emailRequired'] },
            ]}
          >
            <Input type='email' placeholder={messages['common.email']} />
            {/* <TextField name='signup-email' label={messages['common.email']} /> */}
          </Form.Item>

          <Form.Item
            name='birthday'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.birthdayRequired'],
              },
            ]}
          >
            <DatePicker
              style={{ width: '100%' }}
              format='DD/MM/YYYY'
              placeholder={messages['common.birthday']}
            />
            {/* <TextField name='signup-email' label={messages['common.email']} /> */}
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.passwordRequired'],
              },
            ]}
          >
            <Input.Password placeholder={messages['common.password']} />
            {/* <TextFieldPassword
              name='signup-password'
              label={messages['common.password']}
            /> */}
          </Form.Item>
          <Form.Item
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
          >
            <Input.Password placeholder={messages['common.retypePassword']} />
            {/* <TextFieldPassword
              name='signup-retypePassword'
              label={messages['common.retypePassword']}
            /> */}
          </Form.Item>

          {/* <StyledSignupCheckBox
            className='form-field'
            name='iAgreeTo'
            valuePropName='checked'
          >
            <Checkbox>
              <IntlMessages id='common.iAgreeTo' />
            </Checkbox>
            <StyledSignupLink>
              <IntlMessages id='common.termConditions' />
            </StyledSignupLink>
          </StyledSignupCheckBox> */}

          <div className='form-btn-field'>
            <StyledSignUpBtn type='primary' htmlType='submit'>
              <IntlMessages id='common.signup' />
            </StyledSignUpBtn>
          </div>

          <div className='form-field-action'>
            <StyledSignUpTestGrey>
              <IntlMessages id='common.alreadyHaveAccount' />
            </StyledSignUpTestGrey>
            <StyledSignLinkTag to='/signIn'>
              <IntlMessages id='common.signIn' />
            </StyledSignLinkTag>
          </div>
        </StyledSignUpForm>
      </StyledSignUpContent>
    </StyledSignUp>
  );
};

export default SignupJwtAuth;
