import React, { useEffect, useState } from 'react';
import { getAllFeature } from '../../../toolkit/actions';
import { useDispatch } from 'react-redux';
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

const FeatureSelect = ({
  onChange,
  width = '200px',
  placeholder = 'Chọn chức năng',
  allowClear = true,
  value = undefined,
  currentFeature = undefined,
}) => {
  const dispatch = useDispatch();

  const [dataSelect, setDataSelect] = useState([]);

  const onSuccess = (data) => {
    setDataSelect(data);
  };
  const getListData = () => {
    dispatch(getAllFeature(onSuccess));
  };

  const RemoveCurrentFeature = (data, key) => {
    let arr =
      (data && data.length > 0 && data.filter((item) => item.id !== key)) || [];
    arr =
      arr.map((item) => {
        if (item.children && item.children.length > 0) {
          const arr1 = {
            ...item,
            children: item.children.filter((chil) => chil.id !== key),
          };
          const arr2 = arr1.children.map((item1) => {
            if (item1.children && item1.children.length > 0) {
              if (item1.children[0].children) {
                const arr3 = RemoveCurrentFeature(item1.children, key);
                return { ...item1, children: arr3 };
              }
              return {
                ...item1,
                children: item1.children.filter((chil) => chil.id !== key),
              };
            }
            return item1;
          });
          return { ...item, children: arr2 };
        }
        return item;
      }) || [];
    return arr;
  };

  const renderTreeNodes = (data) =>
    data.map((item) => {
      // console.log('renderTreeNodes', data);
      // const { disabledParent } = this.props;
      if (item && item?.children?.length > 0) {
        return (
          <TreeNode value={item.id} title={item.name && item.name.trim()}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode value={item.id} title={item.name && item.name.trim()} />;
    });

  useEffect(() => {
    getListData();
  }, []);

  let newDataSelect = [...dataSelect];

  if (currentFeature) {
    newDataSelect = RemoveCurrentFeature(newDataSelect, currentFeature) || [];
  }

  const treeData = renderTreeNodes(newDataSelect || []);
  return (
    <TreeSelect
      style={{ width }}
      placeholder={placeholder}
      onChange={onChange}
      allowClear={allowClear}
      value={value}
    >
      {treeData}
    </TreeSelect>
  );
};

export default FeatureSelect;
