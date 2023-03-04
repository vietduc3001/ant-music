import React from 'react';
import { Checkbox, Col, Form, Input, Row } from 'antd';
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

const SignupJwtAuth = () => {
  const { messages } = useIntl();
  const { signUpUser } = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledSignUp>
      <StyledSignUpContent>
        <StyledSignUpForm
          name='basic'
          initialValues={{ remember: true }}
          onFinish={signUpUser}
          onFinishFailed={onFinishFailed}
        >
          <Row>
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
            <Input placeholder={messages['common.email']} />
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
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.reTypePassword'],
              },
            ]}
          >
            <Input.Password placeholder={messages['common.retypePassword']} />
          </Form.Item>

          <StyledSignupCheckBox
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
          </StyledSignupCheckBox>

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
