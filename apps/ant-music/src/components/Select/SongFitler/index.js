import React from 'react';
import { Button, Dropdown, Form, Space } from 'antd';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { StyledDropdownRender } from './index.styled';
import SongStatusSelect from '../SongStatusSelect';
import SongPhaseSelect from '../SongPhaseSelect';
import SongReleaseStatusSelect from '../SongReleaseStatusSelect';
import SongDateSelect from '../SongDateSelect';
// import DatePicker from '../../DatePicker';

const formItemLayout = {
  labelCol: {
    xs: { span: 10 },
    sm: { span: 10 },
    md: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 'auto' },
    sm: { span: 'auto' },
    md: { span: 'auto' },
  },
  colon: false,
  labelAlign: 'left',
  style: { marginBottom: 10 },
};

const DropdownRender = () => {
  return (
    <StyledDropdownRender>
      <Form>
        <Form.Item
          {...formItemLayout}
          name='status'
          label='Tình trạng phát hành'
        >
          <SongReleaseStatusSelect placeholder='Lọc theo tình trạng phát hành' />
        </Form.Item>
        <Form.Item {...formItemLayout} name='phase' label='Vòng kiểm duyệt'>
          <SongPhaseSelect placeholder='Lọc theo vòng kiểm duyệt' />
        </Form.Item>
        <Form.Item {...formItemLayout} name='phase' label='Trạng thái'>
          <SongStatusSelect placeholder='Lọc theo trạng thái' />
        </Form.Item>
        <Form.Item {...formItemLayout} name='date' label='Thời gian'>
          <SongDateSelect placeholder='Lọc theo thời gian' />
        </Form.Item>
        <Form.Item {...formItemLayout} htmlFor='submit'>
          <Button style={{ float: 'right' }} type='primary'>
            Đồng ý
          </Button>
        </Form.Item>
      </Form>
    </StyledDropdownRender>
  );
};

const SongFilter = () => {
  return (
    <Dropdown trigger={['click']} dropdownRender={DropdownRender}>
      <div>
        <Button>
          <Space>
            <TbAdjustmentsHorizontal /> Bộ lọc
          </Space>
        </Button>
      </div>
    </Dropdown>
  );
};

export default SongFilter;
