import React, { useEffect, useState } from 'react';
import AppsContainer from '@ant-music/components/AppsContainer';
import AppPageMeta from '@ant-music/components/AppPageMeta';
import RenderMenuItem from '@ant-music/helpers/MenuGenerator';
import AppsContent from '@ant-music/components/AppsContent';
import ConfirmationModal from '@ant-music/components/AppConfirmationModal';
import { StyledFooterPagination } from './index.styled';
import { useDispatch, useSelector } from 'react-redux';

import Table from './Table';
import ModalForm from './ModalForm';
import { getUserList } from '../../../toolkit/actions';
import ChangePasswordModal from './ModalForm/ChangePasswordModal';
import AppHeader from './AppHeader';

const PAGE_SIZE = 10;

const Feature = () => {
  const dispatch = useDispatch();
  const { userList = [], totalRecord } = useSelector(({ user }) => user);
  const { loading } = useSelector(({ common }) => common);
  const menuItem = RenderMenuItem('/user');

  const [dataFilter, setDataFilter] = useState({
    offset: 0,
    limit: PAGE_SIZE,
    keyword: '',
    department: '',
    // status: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] =
    useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const getListData = () => {
    dispatch(getUserList(dataFilter));
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

  const handleChangeFilter = (value, key) => {
    const newDataFilter = {
      ...dataFilter,
    };
    newDataFilter[key] = value || '';
    setDataFilter(newDataFilter);
  };

  useEffect(() => {
    getListData();
  }, [dataFilter]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setDataEdit({});
  };

  const onEdit = (data) => {
    // console.log('🚀 ~ file: index.js:55 ~ onEditFeature ~ feature:', feature);
    setDataEdit(data);
    showModal();
  };

  const onEditPassword = (data) => {
    setDataEdit(data);
    setIsChangePasswordModalVisible(true);
  };

  const onDeleteUser = (data) => {
    setDataEdit(data);
    setDeleteDialogOpen(true);
  };

  const closeChangePasswordModal = () => {
    setIsChangePasswordModalVisible(false);
    setDataEdit({});
  };

  const currentPage = dataFilter.limit / PAGE_SIZE;

  return (
    <>
      <AppPageMeta title={menuItem.name} />
      <AppsContainer title={menuItem.name}>
        <AppHeader
          onSearch={onSearch}
          showModal={showModal}
          handleChangeFilter={handleChangeFilter}
        />

        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Table
            onEdit={onEdit}
            onEditPassword={onEditPassword}
            onDeleteUser={onDeleteUser}
            loading={loading}
            dataSource={userList}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
          />
        </AppsContent>

        <StyledFooterPagination
          key={'wrap2'}
          pageSize={PAGE_SIZE}
          count={totalRecord}
          current={currentPage}
          onChange={onChangePage}
        />
      </AppsContainer>

      {isModalVisible ? (
        <ModalForm
          isModalVisible={isModalVisible}
          dataEdit={dataEdit}
          closeModal={closeModal}
          getListData={getListData}
        />
      ) : null}

      {isChangePasswordModalVisible ? (
        <ChangePasswordModal
          isModalVisible={isChangePasswordModalVisible}
          dataEdit={dataEdit}
          closeModal={closeChangePasswordModal}
        />
      ) : null}

      {isDeleteDialogOpen ? (
        <ConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={() => setDeleteDialogOpen(false)}
          onConfirm={setDeleteDialogOpen}
          modalTitle={`Xoá tài khoản`}
          paragraph={`Xác nhận xoá tài khoản ${dataEdit.email}`}
        />
      ) : null}
    </>
  );
};

export default Feature;
