import { Button, Form, Modal } from 'antd';
import styled from 'styled-components';
import AppsPagination from '@ant-music/components/AppsPagination';
import AppTableContainer from '@ant-music/components/AppTableContainer';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledInputView = styled.div`
  max-width: 150px;
  margin-left: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 200px;
  }
`;

export const StyledHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  flex: 1;
  justify-content: end;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 10px;
  }
`;

export const StyledHeaderPagination = styled(AppsPagination)`
  display: none;
  padding-left: 12px;
  padding-right: 2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }

  [dir='rtl'] & {
    padding-left: 2px;
    padding-right: 12px;
  }
`;
export const StyledFooterPagination = styled(AppsPagination)`
  display: block;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  /*
  margin-top: -10px;
  position: absolute;
  bottom: 20px;
  right: 20px; */

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  } */
`;

export const StyledModalForm = styled(Form)`
  position: relative;

  & .ant-form-item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledSubmitFormButton = styled(Button)`
  float: right;
  margin-top: 15px;
`;

export const StyledStatusButton = styled.span`
  background-color: ${({ styles }) => styles.backgroundColor}!important;
  color: ${({ styles }) => styles.color}!important;
  border: 1px solid ${({ styles }) => styles.border}!important;
  padding: 4px 10px;
  border-radius: 5px;
`;

export const StyledActionsButton = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export const StyledSelectGroup = styled.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;

export const StyledGroupButton = styled.div`
  display: flex;
  gap: 10px;

  & button span {
    margin-left: 5px;
  }

  & .permission-button {
    background-color: ${({ theme }) => theme.palette.green[7]};
    color: #fff;

    &:hover {
      color: #fff;
      /* border: unset; */
    }
  }
`;
