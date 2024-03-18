import { ReactNode } from "react";
import { AntTreeNodeProps } from "antd/es/tree";


export interface ITreeDataNode {
    id: string;
    text: string;
    icon?: string; // Optional property
    state: {
      opened: boolean;
      disabled: boolean;
      selected: boolean;
    };
    a_attr: {
      href: string;
      target: string;
    };
    type: string; // Can be "default" or "isLeaf"
    data: {
      hidden: boolean;
      invalid: boolean;
    };
    children?: ITreeDataNode[]; // Optional property for nested nodes
    li_attr?: string; // Optional property, likely for styling
  }
export interface ITreeDataProps {
  treeDataProps?: ITreeDataNode[],
   checkable?:boolean,
   blockNode?:boolean,
   disabled?:boolean,
   className?:string,
   showLine?:boolean,
   multiple?:boolean,
   onSelect?:(selectedKeys:any, e:{selected: boolean, selectedNode:any, node:any, event:any})=>void,
   icon?:ReactNode | ((props:any) => ReactNode),
   switcherIcon?:ReactNode | ((props: AntTreeNodeProps) => ReactNode),
   onCheck?:(checkedKeys:any, e:{checked: boolean, checkedNodes:any, node:any, event:any, halfCheckedKeys:any})=>void,
  //  defaultExpandedKeys?:  '0-0' | '0-0-0' | '0-0-0-0' | string
   defaultExpandedKeys:   string[] 
  }