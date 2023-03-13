import React, { useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import {
  StyledSongUploadDropzone,
  StyledSongUploadedFile,
} from './index.styled';
import { getFileSize } from '@ant-music/helpers';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#ffffff',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  color: '#2196f3',
  borderColor: '#2196f3',
};

const acceptStyle = {
  color: '#00e676',
  borderColor: '#00e676',
};

const rejectStyle = {
  color: '#ff1744',
  borderColor: '#ff1744',
};

const StyledDropzone = ({
  getFile,
  acceptFiles = {},
  uploadTitle = '',
  type = '',
  uploadProgress = 0,
}) => {
  const { messages } = useIntl();

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: '',
    maxFiles: 1,
    onDropAccepted: (acceptedFiles) => getFile(acceptedFiles[0]),
  });

  // console.log('acceptedFiles', acceptedFiles);
  const fileName = acceptedFiles[0]?.name;
  const fileSize = getFileSize(acceptedFiles[0]?.size);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject],
  );

  // useEffect(() => {
  //   if (acceptedFiles?.length > 0) {
  //     getFile(acceptedFiles);
  //   }
  // }, []);

  return (
    <StyledSongUploadDropzone className='container'>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className='upload-title'>{uploadTitle}</p>
        <p className='upload-subtitle'>{messages['songsApp.uploadSubTitle']}</p>
        {acceptedFiles?.length > 0 && (
          <StyledSongUploadedFile onClick={(e) => e.stopPropagation()}>
            <div className='file-detail'>
              <img
                className='file-icon'
                src={`/assets/images/song/Type_2/${type}-svgrepo-com.svg`}
                alt={type}
              />
              <div className='file-info'>
                <p className='file-name'>{fileName}</p>
                <div>
                  <span className='file-size'>{fileSize}</span>
                  <span className='current-process'>{uploadProgress}%</span>
                </div>
              </div>
            </div>
            <div className='processBarParent'>
              <div className='processBar'></div>
            </div>
          </StyledSongUploadedFile>
        )}
      </div>
    </StyledSongUploadDropzone>
  );
};

export default StyledDropzone;
