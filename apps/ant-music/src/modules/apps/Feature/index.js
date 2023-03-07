import React, { useEffect, useState } from 'react';
import AppsContainer from '@ant-music/components/AppsContainer';
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
import { removeNullChildren } from '@ant-music/helpers';

const PAGE_SIZE = 10;

const Feature = () => {
  const dispatch = useDispatch();
  const { featureList = [], totalRecord } = useSelector(
    ({ feature }) => feature,
  );
  const { loading } = useSelector(({ common }) => common);
  const menuItem = RenderMenuItem('/feature');

  const [dataFilter, setDataFilter] = useState({
    offset: 0,
    limit: PAGE_SIZE,
    keyword: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({});

  const newData = removeNullChildren([...featureList]);

  const getListFeatures = () => {
    dispatch(getFeature(dataFilter));
  };

  const onChangePage = (page) => {
    const offset = PAGE_SIZE * (page - 1);
    const limit = PAGE_SIZE * page;
    setDataFilter({
      ...dataFilter,
      offset,
      limit,
    });
  };

  const onSearch = (e) => {
    setDataFilter({
      ...dataFilter,
      keyword: e.target.value,
    });
  };

  useEffect(() => {
    console.log('re-rendering');
    getListFeatures();
  }, [dataFilter]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedFeature({});
  };

  const onEditFeature = (feature) => {
    // console.log('🚀 ~ file: index.js:55 ~ onEditFeature ~ feature:', feature);
    setSelectedFeature(feature);
    showModal();
  };

  const currentPage = dataFilter.limit / PAGE_SIZE;

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
                onChange={onSearch}
              />
            </StyledCustomerInputView>
            <StyledCustomerHeaderRight>
              <Button type='primary' onClick={showModal}>
                Thêm chức năng
              </Button>

              {/* <StyledCustomerHeaderPagination
                pageSize={PAGE_SIZE}
                count={totalRecord}
                current={currentPage}
                onChange={onChangePage}
              /> */}
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
            featureList={newData}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
          />
        </AppsContent>

        <StyledCustomerFooterPagination
          key={'wrap2'}
          pageSize={PAGE_SIZE}
          count={totalRecord}
          current={currentPage}
          onChange={onChangePage}
        />
      </AppsContainer>

      {isModalVisible ? (
        <CreateFeature
          isModalVisible={isModalVisible}
          selectedFeature={selectedFeature}
          closeModal={closeModal}
          getListFeatures={getListFeatures}
        />
      ) : null}
    </>
  );
};

export default Feature;
