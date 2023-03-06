import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { getFeatureParent } from '../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';

const SelectFeature = ({ placeholder }) => {
  const { featureParentList } = useSelector(({ feature }) => feature);
  const dispatch = useDispatch();
  const [search, setSearchQuery] = useState('');
  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    dispatch(getFeatureParent(search));
  }, [search]);
  return (
    <Select placeholder={placeholder} allowClear>
      {featureParentList?.map((feature) => (
        <Select.Option value={feature.id}>{feature.name}</Select.Option>
      ))}
    </Select>
  );
};

export default SelectFeature;
