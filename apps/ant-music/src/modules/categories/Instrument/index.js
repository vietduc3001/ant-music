import React, { useEffect, useState } from 'react';
import AppsContainer from '@ant-music/components/AppsContainer';
import AppPageMeta from '@ant-music/components/AppPageMeta';
import RenderMenuItem from '@ant-music/helpers/MenuGenerator';
import AppsContent from '@ant-music/components/AppsContent';
import { StyledFooterPagination } from './index.styled';
import { useDispatch, useSelector } from 'react-redux';

import Table from './Table';
import ModalForm from './ModalForm';
import { getInstrumentList } from '../../../toolkit/actions';
import AppHeader from './AppHeader';

const PAGE_SIZE = 10;

const Instrument = () => {
  const dispatch = useDispatch();
  const { instrumentList, totalRecord } = useSelector(
    ({ instrument }) => instrument,
  );
  const { loading } = useSelector(({ common }) => common);
  const menuItem = RenderMenuItem('/instrument');

  const [dataFilter, setDataFilter] = useState({
    offset: 0,
    limit: PAGE_SIZE,
    keyword: undefined,
    status: undefined,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const getListData = (params) => {
    dispatch(getInstrumentList(params));
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
    newDataFilter[key] = value;
    setDataFilter(newDataFilter);
  };

  const renderFilter = () => {
    const newDataFilter = { ...dataFilter };
    if (!newDataFilter.status) delete newDataFilter.status;
    if (!newDataFilter.department) delete newDataFilter.department;
    if (!newDataFilter.role) delete newDataFilter.role;
    return newDataFilter;
  };

  // useEffect(() => {
  //   const params = renderFilter();
  //   getListData(params);
  // }, [dataFilter]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setDataEdit({});
  };

  const onEdit = (data) => {
    setDataEdit(data);
    showModal();
  };

  const currentPage = dataFilter.limit / PAGE_SIZE;

  return (
    <>
      <AppPageMeta title={menuItem.name} />
      <AppsContainer title={menuItem.name} fullView>
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
            loading={loading}
            dataSource={instrumentList}
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

      {/* {isDeleteDialogOpen ? (
        <ConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={() => setDeleteDialogOpen(false)}
          onConfirm={setDeleteDialogOpen}
          modalTitle={`Xoá tài khoản`}
          paragraph={`Xác nhận xoá tài khoản ${dataEdit.email}`}
        />
      ) : null} */}
    </>
  );
};

export default Instrument;
