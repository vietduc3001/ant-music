import React from 'react';
import { StyledCustomerTable } from '../index.styled';
import _ from 'lodash';
import { flattenData } from '@ant-music/helpers';

const FunctionTable = ({
  dataFunctions,
  columns,
  loading,
  selectedRowKeys,
  handleChangeSelectedRowKeys,
}) => {
  const onSelectAll = (selected, selectedRows) => {
    let newSelectedRowKeys;
    if (selected) {
      newSelectedRowKeys = selectedRows.map((item) => item.id);
    } else {
      newSelectedRowKeys = [];
    }
    handleChangeSelectedRowKeys(newSelectedRowKeys);
  };

  const onSelectedRowKeysSelect = (record, selected, selectedRows) => {
    const selectedId =
      record.children?.length > 0
        ? flattenData([...record.children], true)
        : [];
    let newSelectedRowKeys = [...selectedRowKeys];
    // Nếu checked
    if (selected) {
      // Nếu cha checked => con checked
      if (
        Number(record.parent) !== 0 &&
        !newSelectedRowKeys.includes(record.parent)
      ) {
        newSelectedRowKeys = [...newSelectedRowKeys, record.parent];
      }
      newSelectedRowKeys = [...newSelectedRowKeys, record.id, ...selectedId];
    }
    // Nếu bỏ check
    else {
      // Nếu bỏ check cha => bỏ check con
      if (Number(record.parent) !== 0) {
        const dataParent = selectedRows.find(
          (item) => item.id === record.parent,
        );
        const temp = flattenData([...dataParent.children], true);
        const temp1 = _.union(temp, newSelectedRowKeys);
        if (temp1.length === temp.length + newSelectedRowKeys.length - 1) {
          newSelectedRowKeys = _.difference(newSelectedRowKeys, [
            record.parent,
            record.id,
          ]);
        } else {
          newSelectedRowKeys = newSelectedRowKeys.filter(
            (id) => id !== record.id,
          );
        }
      } else {
        newSelectedRowKeys = newSelectedRowKeys.filter(
          (id) => id !== record.id,
        );
      }
      newSelectedRowKeys = _.difference(newSelectedRowKeys, [
        ...selectedId,
        record.id,
      ]);
    }

    handleChangeSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onSelect: onSelectedRowKeysSelect,
    onSelectAll: onSelectAll,
  };
  return (
    <StyledCustomerTable
      hoverColor
      data={dataFunctions}
      columns={columns}
      loading={loading}
      scroll={{ x: 'auto' }}
      rowSelection={rowSelection}
    />
  );
};

export default FunctionTable;
