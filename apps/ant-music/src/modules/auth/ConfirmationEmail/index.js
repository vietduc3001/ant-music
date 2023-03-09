import { Button, Divider } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledConfirmationEmail = styled.div`
  text-align: center;
  margin-top: 20px;
  img {
    max-width: 100px;
  }

  p,
  button {
    font-size: 16px;
  }
`;

const ConfirmationEmail = () => {
  return (
    <StyledConfirmationEmail>
      <img src='/assets/images/auth/email.png' alt='Confirmation Email' />
      <h1>Xác nhận địa chỉ email</h1>
      <p>Chúng tôi đã gửi một email xác nhận đến email bạn đăng ký</p>
      <Divider />
      <p>
        Nếu bạn không nhận được email nào{' '}
        <Button type='link' block>
          Bấm vào đây để gửi lại.
        </Button>
      </p>
    </StyledConfirmationEmail>
  );
};

export default ConfirmationEmail;
