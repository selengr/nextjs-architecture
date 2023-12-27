import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function UICustomizedTabs({
  children,
  tabsName,
  highlightColor
} // value
: {
  children: React.ReactNode;
  highlightColor?:string;
  tabsName: {
    first: string;
    second: string;
  };
}) {
  // const [index, setIndex] = React.useState(0);
  return (
    <Tabs
      sx={{
        bgcolor: 'transparent',
        '& .MuiTabs-indicator': {
          backgroundColor: '#02A95C'
        }
      }}
      className="w-[100%] flex justify-center items-center"
      aria-label="Basic tabs"
      defaultValue={0}
    >
      <TabList
        sx={{ bgcolor: 'transparent', borderBottom: '1px solid #EDEBEB',marginBottom:".5rem"}}
        className="w-[100%] flex justify-center items-center font-ms-iranSansMobile font-ms-medium"
      >
        <Tab
          sx={{
            bgcolor: 'transparent',
            '& .MuiTabs-indicator': {
              backgroundColor: 'red',
              // --Tab-indicatorColor: currentColor;
              borderBottom: '2px solid red !important'
            },
            '&[aria-selected="true"]': {
              '--Tab-indicatorColor': highlightColor? highlightColor : '#02A95C !important'
            },
            '&:hover': {
              // backgroundColor: "primary.main",
              // borderBottom: "2px solid red !important",
            },
            '&.Mui-selected': {
              backgroundColor: 'transparent',
              borderBottom: '2px solid red !important'
            }
          }}
          className="w-[40%]"
        >
          {tabsName.first}
        </Tab>

        <Tab
          sx={{
            bgcolor: 'transparent',
            '&:hover': {
              // backgroundColor: "primary.main",
            },
            '&.Mui-selected': {
              borderBottom: '2px solid red',
              backgroundColor: 'transparent'
            },
            '&[aria-selected="true"]': {
              '--Tab-indicatorColor': highlightColor? highlightColor : '#02A95C !important'
            }
          }}
          className="w-[40%]"
        >
          {tabsName.second}
        </Tab>
      </TabList>

      {children}
      {/* 
      <TabPanel value={0}>
          <b>First</b> tab panel
      </TabPanel>

      <TabPanel value={1}>
          <b>Second</b> tab panel
      </TabPanel> */}
    </Tabs>
  );
}
