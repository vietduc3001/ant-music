import React from 'react';
import { StyledSongUploadContainer } from './index.styled';
import UploadForm from './UploadForm';

const SongsUpload = ({ isModalVisible, title = '', onOk, onClose }) => {
  return (
    <StyledSongUploadContainer
      open={isModalVisible}
      title={title}
      onOk={onOk}
      onCancel={onClose}
      onClose={onClose}
    >
      <UploadForm />
    </StyledSongUploadContainer>
  );
};

export default SongsUpload;
