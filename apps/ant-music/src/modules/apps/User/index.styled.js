import { Button, Form, Select } from 'antd';
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 200px;
  }
`;

export const StyledHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

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

export const StyledTable = styled(AppTableContainer)`
  & .ant-table table {
    table-layout: auto !important;
  }

  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 8px;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 12px;
      padding-left: 12px;
    }

    &.customer-table-actions {
      text-align: center;
      background-color: ${({ theme }) =>
        theme.palette.background.paper} !important;
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 12px 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 8px;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 12px;
      padding-left: 12px;
    }

    &.customer-table-actions {
      text-align: center;
      background-color: ${({ theme }) =>
        theme.palette.background.paper} !important;
    }
  }

  & .badge {
    padding: 3px 8px;
    color: white;
    background-color: ${({ theme }) => theme.palette.green[6]};
    width: 45px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    height: 18px;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.font.size.sm};

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;

export const StyledSubmitFormButton = styled(Button)`
  float: right;
  margin-top: 15px;
`;

export const StyledStatusButton = styled(Select)`
  width: 100%;
  &.ant-select .ant-select-selector,
  .ant-select-arrow {
    background-color: ${({ styles }) => styles.backgroundColor}!important;
    color: ${({ styles }) => styles.color}!important;
    outline: unset;
  }

  /* .ant-select-selection-item {
    text-align: center;
  } */
`;

export const StyledActionsButton = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export const StyledSelectGroup = styled.div`
  flex: 1;
  margin-left: 10px;
`;
