import { Button, Divider } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledConfirmationEmail = styled.div`
  text-align: center;
  margin-top: 20px;
  img {
    max-width: 250px;
  }

  p,
  button {
    font-size: 16px;
  }
`;

const ConfirmationEmail = () => {
  const navigate = useNavigate();
  const goToSigninPage = () => {
    navigate('/signin');
  };
  return (
    <StyledConfirmationEmail>
      <img
        src='/assets/images/auth/access-denied.jpg'
        alt='Confirmation Email'
      />
      <h1>Tài khoản của bạn chưa được kích hoạt hoặc đã bị khoá</h1>
      <p>Vui lòng liên hệ Admin để biết thêm thông tin</p>
      <Divider />
      <Button onClick={goToSigninPage} type='link' block>
        Đăng nhập bằng tài khoản khác.
      </Button>
    </StyledConfirmationEmail>
  );
};

export default ConfirmationEmail;
