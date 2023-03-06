import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import IntlMessages from '@ant-music/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import {
  StyledForgotBtn,
  StyledForgotContent,
  StyledForgotForm,
  StyledForgotPara,
  StyledFormFooter,
} from './index.styled';
import { useAuthMethod } from '@ant-music/hooks/AuthHooks';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ForgetPasswordJwtAuth = () => {
  const { messages } = useIntl();
  const { sendMailForgetPassword } = useAuthMethod();

  return (
    <StyledForgotContent>
      <StyledForgotPara>
        <IntlMessages id='common.forgetPasswordText' />
        {/* <span>
          <IntlMessages id='common.forgetPasswordTextTwo' />
        </span> */}
      </StyledForgotPara>

      <StyledForgotForm
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name='email'
          className='form-field'
          rules={[
            { required: true, message: messages['common.emailRequired'] },
          ]}
        >
          <Input placeholder={messages['common.emailAddress']} />
        </Form.Item>

        <div className='form-field'>
          <StyledForgotBtn type='primary' htmlType='submit'>
            <IntlMessages id='common.submit' />
          </StyledForgotBtn>
        </div>

        <StyledFormFooter>
          <IntlMessages id='common.alreadyHavePassword' />
          <Link to='/signin'>
            <IntlMessages id='common.signIn' />
          </Link>
        </StyledFormFooter>
      </StyledForgotForm>
    </StyledForgotContent>
  );
};

export default ForgetPasswordJwtAuth;
