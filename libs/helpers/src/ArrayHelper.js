import _ from 'lodash';

export const removeNullChildren = (data = []) => {
  let tempData = _.cloneDeep(data);
  tempData = tempData.map((item) => {
    const childLength = item?.children?.length || 0;
    if (childLength > 0) {
      return {
        ...item,
        childLength,
        children: removeNullChildren(item?.children),
      };
    }
    const newItem = { ...item };
    delete newItem.children;
    return newItem;
  });
  return tempData;
};

function processChildren(obj, level) {
  if (!level) level = 0;
  let array = [];
  obj.children &&
    obj.children.length > 0 &&
    obj.children.map((childObj) => {
      array = array.concat(flattenChild(childObj, obj.id, level + 1));
      return null;
    });

  return array;
}

function flattenChild(childObj, parentId, level) {
  let array = [];

  const childCopy = Object.assign({}, childObj);
  childCopy.level = level;
  childCopy.parent = parentId;
  childCopy.childLength = childCopy?.children?.length || 0;
  delete childCopy.children;
  array.push(childCopy);

  array = array.concat(processChildren(childObj, level));

  return array;
}

function flatten(treeObj, idAttr, parentAttr, childrenAttr, levelAttr) {
  if (!idAttr) idAttr = 'id';
  if (!parentAttr) parentAttr = 'parent';
  if (!childrenAttr) childrenAttr = 'children';
  if (!levelAttr) levelAttr = 'level';

  const result = processChildren(treeObj);
  return result;
}

export const flattenData = (data, getId) => {
  const temp = flatten({
    children: data,
  });
  let result;
  if (getId) {
    result = temp.map((item) => item.id);
  } else {
    result = [...temp];
  }
  return result;
};
