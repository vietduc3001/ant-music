import { Button, Input, Space } from 'antd';
import React from 'react';
import AppsHeader from '@ant-music/components/AppsHeader';
import {
  StyledHeader,
  StyledHeaderRight,
  StyledInputView,
} from '../index.styled';
import { TbUpload } from 'react-icons/tb';
import SongFilter from '../../../../components/Select/SongFitler';
import SongDateSelect from '../../../../components/Select/SongDateSelect';
import SongPhaseSelect from '../../../../components/Select/SongPhaseSelect';
import SongStatusSelect from '../../../../components/Select/SongStatusSelect';
import SongReleaseStatusSelect from '../../../../components/Select/SongReleaseStatusSelect';

const SongHeader = ({ onSearch, showModal, count, current, pageSize }) => {
  return (
    <AppsHeader key={'wrap'}>
      <StyledHeader>
        {/* <SongFilter /> */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <SongDateSelect placeholder='Lọc theo thời gian' />
          <SongPhaseSelect />
          <SongReleaseStatusSelect />
          <SongStatusSelect />
        </div>
        <StyledInputView>
          <Input
            id='user-name'
            placeholder='Tìm kiếm'
            type='search'
            onChange={onSearch}
            // style={{ width: '200px' }}
          />
        </StyledInputView>
        <StyledHeaderRight>
          <Button type='primary' onClick={showModal}>
            <Space>
              <TbUpload />
              Tải lên
            </Space>
          </Button>
          {/* <StyledHeaderPagination
            count={count}
            current={current}
            pageSize={pageSize}
          /> */}
        </StyledHeaderRight>
      </StyledHeader>
    </AppsHeader>
  );
};

export default SongHeader;
