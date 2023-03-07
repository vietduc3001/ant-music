import React, { useEffect, useState } from 'react';
import AppsContainer from '@ant-music/components/AppsContainer';
import AppPageMeta from '@ant-music/components/AppPageMeta';
import RenderMenuItem from '@ant-music/helpers/MenuGenerator';
import AppsHeader from '@ant-music/components/AppsHeader';
import AppsContent from '@ant-music/components/AppsContent';
import {
  StyledCustomerHeader,
  StyledCustomerHeaderPagination,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,
} from './index.styled';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartment } from '../../../toolkit/actions';

import DepartmentTable from './DepartmentTable';
import DepartmentModal from './DepartmentModal';
import GrantPerMissionDepartmentModal from './GrantPerMissionDepartmentModal';

const PAGE_SIZE = 10;

const Department = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ common }) => common);
  const menuItem = RenderMenuItem('/department');

  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalGrantPermissionVisible, setIsModalGrantPermissionVisible] =
    useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const getListData = () => {
    dispatch(getDepartment());
  };

  const onChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getListData();
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

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

  const { departmentList = [] } = useSelector(({ department }) => department);

  let dataSource = loading ? [] : departmentList;

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
              <Button type='primary' onClick={onEdit}>
                Thêm phòng ban
              </Button>

              <StyledCustomerHeaderPagination
                pageSize={PAGE_SIZE}
                count={departmentList.length}
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
          <DepartmentTable
            onEdit={onEdit}
            onGrantPermission={onGrantPermission}
            loading={loading}
            data={dataSource}
            page={page}
            pageSize={PAGE_SIZE}
          />
        </AppsContent>
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
        <GrantPerMissionDepartmentModal
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
