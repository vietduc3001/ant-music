import React, { useEffect, useState } from 'react';
import AppsContainer from '@ant-music/components/AppsContainer';
import AppPageMeta from '@ant-music/components/AppPageMeta';
import RenderMenuItem from '@ant-music/helpers/MenuGenerator';
import AppsHeader from '@ant-music/components/AppsHeader';
import AppsContent from '@ant-music/components/AppsContent';
import {
  StyledCustomerHeader,
  StyledCustomerFooterPagination,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,
} from './index.styled';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartment } from '../../../toolkit/actions';

import DepartmentTable from './DepartmentTable';
import DepartmentModal from './DepartmentModal';
import GrantPermissionDepartmentModal from './GrantPermissionDepartmentModal';

const PAGE_SIZE = 10;

const Department = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ common }) => common);
  const menuItem = RenderMenuItem('/department');

  const [dataFilter, setDataFilter] = useState({
    offset: 0,
    limit: PAGE_SIZE,
    keyword: '',
  });

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalGrantPermissionVisible, setIsModalGrantPermissionVisible] =
    useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const getListData = () => {
    dispatch(getDepartment(dataFilter));
  };

  useEffect(() => {
    getListData();
  }, [dataFilter]);

  // ====================== Chinh sua thong tin phong ban ==============================
  const closeModal = () => {
    setIsModalVisible(false);
    setDataEdit({});
  };

  const onEdit = (data = {}) => {
    setDataEdit(data);
    setIsModalVisible(true);
  };

  // ======================== Cap quyen cho phong ban ===========================================
  const onGrantPermission = (data = {}) => {
    setDataEdit(data);
    setIsModalGrantPermissionVisible(true);
  };

  const onCloseGrantPermissionModal = () => {
    setIsModalGrantPermissionVisible(false);
    setDataEdit({});
  };

  const { departmentList = [], totalRecord } = useSelector(
    ({ department }) => department,
  );

  let dataSource = loading ? [] : departmentList;
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
              <Button type='primary' onClick={onEdit}>
                Thêm phòng ban
              </Button>
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
          <DepartmentTable
            onEdit={onEdit}
            onGrantPermission={onGrantPermission}
            loading={loading}
            data={dataSource}
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
        <DepartmentModal
          isModalVisible={isModalVisible}
          dataEdit={dataEdit}
          closeModal={closeModal}
          getListData={getListData}
        />
      ) : null}

      {isModalGrantPermissionVisible ? (
        <GrantPermissionDepartmentModal
          isModalVisible={isModalGrantPermissionVisible}
          dataEdit={dataEdit}
          closeModal={onCloseGrantPermissionModal}
          // getListData={getListData}
        />
      ) : null}
    </>
  );
};

export default Department;
