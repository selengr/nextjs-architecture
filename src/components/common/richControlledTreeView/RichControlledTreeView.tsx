'use client';

import React, { useMemo, useState,useEffect } from 'react';
import type { TreeDataNode, TreeProps } from 'antd';
import { Input, Tree } from 'antd';
import './RichControlledTreeView.css';
import { ITreeDataNode, ITreeDataProps } from './types';


export const dynamic = 'force-dynamic';


const { Search } = Input;

// const x = 3;
// const y = 2;
// const z = 1;
// const defaultData: TreeDataNode[] = [];

// const generateData = (
//   _level: number,
//   _preKey?: React.Key,
//   _tns?: TreeDataNode[]
// ) => {
//   const preKey = _preKey || '0';
//   const tns = _tns || defaultData;

//   const children: React.Key[] = [];
//   for (let i = 0; i < x; i++) {
//     const key = `${preKey}-${i}`;
//     tns.push({ title: key, key });
//     if (i < y) {
//       children.push(key);
//     }
//   }
//   if (_level < 0) {
//     return tns;
//   }
//   const level = _level - 1;
//   children.forEach((key, index) => {
//     tns[index].children = [];
//     return generateData(level, key, tns[index].children);
//   });
// };
// generateData(z);

const dataList: { key: React.Key; title: string }[] = [];
const generateList = (data: ITreeDataNode[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { id,text } = node;
    dataList.push({ key:id, title: text as string });
    if (node.children) {
      generateList(node.children);
    }
  }
};
// generateList(defaultData);

const getParentKey = (key: React.Key, tree: ITreeDataNode[]): React.Key => {
  let parentKey: React.Key;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.id === key)) {
        parentKey = node.id;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey!;
};

const RichControlledTreeView: React.FC<ITreeDataProps> = ({
  treeDataProps = [],
  checkable = true,
  defaultExpandedKeys = [],
}) => {
  // const RichControlledTreeView: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);

 
useEffect(()=>{
  generateList(treeDataProps);
},[])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let milliseconds = 4000
    let searchTimeout : any
    
    clearTimeout(searchTimeout);

    if(value.length >= 2){
     searchTimeout = setTimeout(() => {
      console.log("teeeeeeeeeeeeeeeeeeeeeeeeeeee")
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, treeDataProps);
        }
        return null;
      })
      .filter((item, i, self): item is React.Key => !!(item && self.indexOf(item) === i));
    console.log("newExpandedKeys",newExpandedKeys)
    clearTimeout(searchTimeout);
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  }, milliseconds);
  }
};

  const treeData = useMemo(() => {
    const loop = (data: ITreeDataNode[]): any =>
      data.length &&
      data.map((item) => {
        const strTitle = item.text as string;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return {
            title,
            key: item.id,
            children: loop(item.children)
          };
        }

        return { title, key: item.id };
      });
    return loop(treeDataProps);
  }, [searchValue]);



  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };


  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };


  console.log('dataList :>> ', dataList);

  return (
    <div className={'treeView'}>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      {/* {treeDataProps.length ? ( */}
      <Tree
        // defaultExpandAll={true}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        // defaultExpandedKeys={defaultExpandedKeys}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        checkable={checkable}
        // blockNode={props.blockNode}
        // disabled={props.disabled}
        // icon={props.icon}
        // onSelect={onSelect}
        // className={props.className}
        // showLine={props.showLine}
        // multiple={props.multiple}
        // showIcon={true}
        // switcherIcon={props.switcherIcon}
        // titleRender={(nodeData) => <>{nodeData.title}</>}
        // onCheck={(checkedKeys, e) =>
        //   console.log('treeeeeeeeeeee', checkedKeys, e)
        // }
        // onLoad={() => <>frkljghrkjsgh</>}
        // onRightClick={() => console.log('object')}
      />
      {/* ) : (
        'loading tree'
      )} */}
    </div>
  );
};

export default RichControlledTreeView;
