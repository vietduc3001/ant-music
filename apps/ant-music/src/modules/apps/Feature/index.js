import React, { useEffect, useState } from 'react';
import AppsContainer from '@ant-music/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppPageMeta from '@ant-music/components/AppPageMeta';
import RenderMenuItem from '@ant-music/helpers/MenuGenerator';
import AppsHeader from '@ant-music/components/AppsHeader';
import AppsContent from '@ant-music/components/AppsContent';
import {
  StyledCustomerFooterPagination,
  StyledCustomerHeader,
  StyledCustomerHeaderPagination,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,
} from './index.styled';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import FeatureTable from './FeatureTable';
import { getFeature } from '../../../toolkit/actions';
import CreateFeature from './CreateFeature';

const Feature = () => {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const { featureList } = useSelector(({ feature }) => feature);
  const { loading } = useSelector(({ common }) => common);
  const menuItem = RenderMenuItem('/feature');

  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    console.log('re-rendering');
    dispatch(getFeature(search, page));
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const [selectedFeature, setSelectedFeature] = useState({});

  const onEditFeature = (feature) => {
    setSelectedFeature(feature);
    showModal();
  };

  return (
    <>
      <AppPageMeta title={menuItem.name} />
      <AppsContainer title={menuItem.name}>
        <AppsHeader key={'wrap'}>
          <StyledCustomerHeader>
            <StyledCustomerInputView>
              <Input
                id='user-name'
                placeholder='Tìm kiếm'
                type='search'
                onChange={onSearchOrder}
              />
            </StyledCustomerInputView>
            <StyledCustomerHeaderRight>
              <Button type='primary' onClick={showModal}>
                Thêm chức năng
              </Button>

              <StyledCustomerHeaderPagination
                pageSize={10}
                count={featureList.length}
                page={page}
                onChange={onChange}
              />
            </StyledCustomerHeaderRight>
          </StyledCustomerHeader>
        </AppsHeader>

        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <FeatureTable
            onEditFeature={onEditFeature}
            loading={loading}
            featureList={featureList}
          />
        </AppsContent>
      </AppsContainer>

      <Modal
        title={messages['common.create']}
        open={isModalVisible}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <CreateFeature selectedFeature={selectedFeature} form={form} />
      </Modal>
    </>
  );
};

export default Feature;
