import { Button, Col, Form, Input, Select } from 'antd';
import AWS from 'aws-sdk';
import React, { useRef, useState } from 'react';
import {
  StyledSongUploadForm,
  StyledSongUploadFormItem,
  StyledSongUploadRow,
} from './index.styled';
import { useIntl } from 'react-intl';
import Dropzone from './DropZone';
import { saveAs } from 'file-saver';
import axios from 'axios';

// import Minio from 'minio';

// var Minio = require('minio');

const acceptedFileTypesAudio = {
  'audio/*': ['.mp3'],
};

const acceptedFilesAudioMidi = '.mid';

const acceptedFileTypesVideo = {
  'video/*': [],
};

// AWS.config.update({
//   accessKeyId: '94J8IN5ED998HT0PIUJZ',
//   secretAccessKey: 'FgNYSPuqIlwO58cDz3tmP0DRxzvkcwo9kDwRDdji',
//   region: 'us-east-1',
//   endpoint: 'https://s3-hcm-r1.longvan.net',
// });

const s3 = new AWS.S3({
  endpoint: 's3-hcm-r1.longvan.net',
  region: 'us-east-1',
  signatureVersion: 'v4',
  accessKeyId: '94J8IN5ED998HT0PIUJZ',
  secretAccessKey: 'FgNYSPuqIlwO58cDz3tmP0DRxzvkcwo9kDwRDdji',
});

const UploadForm = () => {
  const { messages } = useIntl();
  const [files, setFiles] = useState([]);
  const [uploadProgress1, setUploadProgress1] = useState(0);
  const [uploadProgress2, setUploadProgress2] = useState(0);
  const [uploadProgress3, setUploadProgress3] = useState(0);
  const [uploadProgress4, setUploadProgress4] = useState(0);
  // const uploadProgress1 = useRef(0);
  // const uploadProgress2 = useRef(0);
  // const uploadProgress3 = useRef(0);
  // const uploadProgress4 = useRef(0);

  // var s3Client = new Minio({
  //   endPoint: 'https://s3-hcm-r1.longvan.net',
  //   accessKey: '94J8IN5ED998HT0PIUJZ',
  //   secretKey: 'FgNYSPuqIlwO58cDz3tmP0DRxzvkcwo9kDwRDdji',
  // });

  const formItemLayout = {
    // labelCol: {
    //   xs: { span: 24 },
    //   sm: { span: 24 },
    //   md: { span: 24 },
    // },
    // wrapperCol: {
    //   xs: { span: 24 },
    //   sm: { span: 24 },
    //   md: { span: 24 },
    // },
    colon: false,
    labelAlign: 'left',
    style: { marginBottom: 10 },
  };

  const uploadFile = (file, progressVariable, setUploadProgressVariable) => {
    const params = {
      Bucket: 'ant-music-bucket-test',
      Key: file.name,
      Body: file,
      // ACL: 'public-read',
    };

    // const managedUpload = s3.upload(params);
    const managedUpload = new AWS.S3.ManagedUpload({
      partSize: 500 * 1024 * 1024, // 5 MB
      queueSize: 1,
      params: params,
      service: s3,
    });

    managedUpload.on('httpUploadProgress', (progress) => {
      progressVariable = Math.round((progress.loaded / progress.total) * 100);
      setUploadProgressVariable(progressVariable);
    });
    managedUpload.send((err, data) => {
      if (err) {
        console.log('err', err);
        return;
      }
      console.log('File uploaded successfully:', data);
      // setUploadProgress(0);
    });
    // s3.upload(params, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log('File uploaded successfully:', data.Location);
    // });
  };

  const downloadFile = () => {
    s3.getObject({
      Bucket: 'ant-music-bucket-test',
      Key: 'beat mashup 3 bai.mp3',
    })
      .promise()
      .then((data) => {
        // File contents are in data.Body
        console.log(data);
        // saveAs(data.Body, 'YOUR_FILE_NAME');
        const file = new Blob([data.Body], { type: 'audio/mpeg' });
        saveAs(file, 'YOUR_FILE_NAME');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFile = (file) => {
    console.log('🚀 ~ file: UploadForm.js:129 ~ getFile ~ file:', file);
    if (files.length > 0) {
      setFiles([...files, file]);
    } else {
      setFiles([file]);
    }
  };

  const onFinish = async () => {
    console.log('🚀 ~ file: UploadForm.js:136 ~ onFinish ~ files:', files);
    uploadFile(files[0], uploadProgress1, setUploadProgress1);
    uploadFile(files[1], uploadProgress2, setUploadProgress2);
    uploadFile(files[2], uploadProgress3, setUploadProgress3);
    uploadFile(files[3], uploadProgress4, setUploadProgress4);
    // downloadFile();
    // const file = files[0];
    // const presignedUrl = await generatePresignedUrl(
    //   'ant-music-bucket-test',
    //   file.name,
    // );
    // uploadFileToPresignedUrl(presignedUrl, file)
    //   .then((response) => {
    //     console.log('File uploaded successfully', response);
    //   })
    //   .catch((error) => {
    //     console.error('Error uploading file:', error);
    //   });
  };

  return (
    <StyledSongUploadForm onFinish={onFinish} layout='vertical'>
      {/* <StyledSongUploadFormItem
        className='form-field'
        name='name'
        rules={[{ required: true, message: messages['validation.input'] }]}
        {...formItemLayout}
        label={<span>{messages['songsApp.nameLabel']}</span>}
      >
        <Input placeholder={messages['songsApp.nameInputPlaceholder']} />
      </StyledSongUploadFormItem>

      <StyledSongUploadRow gutter={[20, 10]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <StyledSongUploadFormItem
            className='form-field'
            name='name'
            rules={[{ required: true, message: messages['validation.select'] }]}
            {...formItemLayout}
            label={<span>{messages['songsApp.genreLabel']}</span>}
          >
            <Select placeholder={messages['songsApp.genreSelectPlaceholder']} />
          </StyledSongUploadFormItem>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <StyledSongUploadFormItem
            className='form-field'
            name='name'
            rules={[{ required: true, message: messages['validation.select'] }]}
            {...formItemLayout}
            label={<span>{messages['songsApp.themeLabel']}</span>}
          >
            <Select placeholder={messages['songsApp.themeSelectPlaceholder']} />
          </StyledSongUploadFormItem>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <StyledSongUploadFormItem
            className='form-field'
            name='name'
            rules={[{ required: true, message: messages['validation.select'] }]}
            {...formItemLayout}
            label={<span>{messages['songsApp.moodLabel']}</span>}
          >
            <Select placeholder={messages['songsApp.moodSelectPlaceholder']} />
          </StyledSongUploadFormItem>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <StyledSongUploadFormItem
            className='form-field'
            name='name'
            rules={[{ required: true, message: messages['validation.select'] }]}
            {...formItemLayout}
            label={<span>{messages['songsApp.effectLabel']}</span>}
          >
            <Select
              placeholder={messages['songsApp.effectSelectPlaceholder']}
            />
          </StyledSongUploadFormItem>
        </Col>
      </StyledSongUploadRow> */}

      <StyledSongUploadFormItem
        className='form-field'
        // name='name'
        // rules={[{ required: true, message: messages['validation.input'] }]}
        {...formItemLayout}
        label={<span>{messages['songsApp.uploadLabel']}</span>}
      >
        <StyledSongUploadRow gutter={[20, 10]}>
          <Col xs={24} lg={12}>
            <StyledSongUploadFormItem className='form-field' name='mp3'>
              <Dropzone
                uploadTitle={messages['songsApp.uploadTitleMp3']}
                acceptFiles={acceptedFileTypesVideo}
                type='mp3'
                getFile={getFile}
                uploadProgress={uploadProgress1}
              />
            </StyledSongUploadFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <Dropzone
              uploadTitle={messages['songsApp.uploadTitleWav']}
              acceptFiles={acceptedFileTypesAudio}
              type='wav'
              getFile={getFile}
              uploadProgress={uploadProgress2}
            />
          </Col>
          <Col xs={24} lg={12}>
            <Dropzone
              uploadTitle={messages['songsApp.uploadTitleMidi']}
              acceptFiles={acceptedFilesAudioMidi}
              type='midi'
              getFile={getFile}
              uploadProgress={uploadProgress3}
            />
          </Col>

          <Col xs={24} lg={12}>
            <Dropzone
              uploadTitle={messages['songsApp.uploadTitleMp4']}
              acceptFiles={acceptedFileTypesVideo}
              type='mp4'
              getFile={getFile}
              uploadProgress={uploadProgress4}
            />
          </Col>
        </StyledSongUploadRow>
      </StyledSongUploadFormItem>
      <Form.Item>
        <Button style={{ float: 'right' }} type='primary' htmlType='submit'>
          Lưu
        </Button>
      </Form.Item>
    </StyledSongUploadForm>
  );
};

export default UploadForm;
