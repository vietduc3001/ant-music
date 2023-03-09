import React, { useEffect, useState } from 'react';
import { getRoleList } from '../../../toolkit/actions';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';

const RoleSelect = ({
  onChange,
  width = '200px',
  placeholder = 'Chọn vị trí',
  allowClear = true,
  value = undefined,
  ...restProps
}) => {
  const dispatch = useDispatch();

  const [dataSelect, setDataSelect] = useState([]);

  const onSuccess = (data) => {
    setDataSelect(data);
  };
  const getListData = () => {
    dispatch(getRoleList(onSuccess));
  };

  useEffect(() => {
    getListData();
  }, []);
  return (
    <Select
      style={{ width }}
      placeholder={placeholder}
      onChange={onChange}
      allowClear={allowClear}
      value={value}
      {...restProps}
    >
      {dataSelect.map((data) => (
        <Select.Option value={data.name}>{data.name}</Select.Option>
      ))}
    </Select>
  );
};

export default RoleSelect;
