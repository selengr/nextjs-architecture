"use client"

import React from "react";
import SwitchSelector from 'react-switch-selector';
import styles from "./uiSwitchSelector.module.css"


const options = [
  {
    // BorderRadius:15,
    label: "خارجی",
    value: "خارجی",
    selectedBackgroundColor: "#F3FCF8",
    selectedBorder: "#000",
    selectedFontColor:"#000000",
    innerHeight: 10,
    backgroundColor:"#F3FCF8",
    fontColor:"#1B3D13",
    border: "5px solid #000"
    
  },
  {
    // borderRadius:15,
    label: "داخلی",
    value: "داخلی",
    selectedBackgroundColor: "#F3FCF8",
    selectedFontColor:"#000000",
    backgroundColor:"#FFFFFF",
    fontColor:"#1B3D13",
    selectedBorder: "#000",
    // border : "#06AB5F",
    border:"11px solid #000"
  }
];



const onChange = (newValue:any) => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

export default function UiSwitchSelector() {



  return (


    <div className={styles.msSelector}>
      <p className="h-full rounded-2xl">
        <SwitchSelector
          onChange={onChange}
          // wrapperBorderRadius={"#000"}
          optionBorderRadius={20}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"#FFFFFF"}
          fontColor={"#f5f6fa"}
          fontSize={"13px"}
          border={"1px solid #F2F2F2"}
        />
      </p>
    </div>
  );
}

