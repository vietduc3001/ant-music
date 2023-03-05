import { Input } from 'antd';
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;

  & input::placeholder {
    opacity: 0;
  }

  & input {
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.lg};
    padding: 10px 15px;
    outline: none;
    box-sizing: border-box;
  }

  & label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.palette.gray[600]};
    letter-spacing: 1px;
    transition: 0.3s;
    font-family: 'Roboto', sans-serif;
  }

  & input:focus + label,
  & input:not(:placeholder-shown) + label {
    top: 0;
    font-size: 0.8rem;
    background: #fff;
    padding: 7px;
  }

  & input:focus + label {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
