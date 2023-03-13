import { Form, Modal, Row } from 'antd';
import styled from 'styled-components';

export const StyledSongUploadContainer = styled(Modal)`
  top: 0;
  width: 100vw !important;
  margin: 0;
  max-width: 100% !important;
  padding: 0;

  & .ant-modal-content {
    height: 100vh !important;
    border-radius: 0;
  }

  & .ant-modal-body {
    height: calc(100vh - 117px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 15px;
  }
`;

export const StyledSongUploadForm = styled(Form)``;

export const StyledSongUploadFormItem = styled(Form.Item)`
  & .ant-form-item-label {
    font-weight: 500;
  }
`;

export const StyledSongUploadRow = styled(Row)``;

export const StyledSongUploadDropzone = styled.div`
  /* border-top: 1px solid ${({ theme }) => theme.palette.gray[200]}; */
  margin-top: 10px;

  & .upload-title {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const StyledSongUploadedFile = styled.div`
  background-color: #f2f3f5;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px 15px;
  width: 100%;

  & .file-detail {
    display: flex;
  }

  .file-icon {
    width: 40px;
    margin-right: 15px;
  }

  .file-info {
    flex: auto;
  }

  .file-name {
    font-weight: 600;
    color: #525659;
  }

  .file-size,
  .current-process {
    font-weight: 500;
    font-size: 12px;
    color: #7a8088;
  }

  .current-process {
    float: right;
  }
`;
