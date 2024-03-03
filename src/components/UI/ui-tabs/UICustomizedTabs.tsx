'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ChoosingFlightInformation from '@/components/Layout/flight/ChoosingFlightInformation';

export default function UICustomizedTabs({
  children,
  tabsName,
  highlightColor // value
}: {
  children?: React.ReactNode;
  highlightColor?: string;
  tabsName: {
    first: string;
    second: string;
  };
}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="w-[100%] flex justify-center items-center"
            sx={{
              bgcolor: 'transparent',
              justifyContent: 'center !important',
              '& .MuiTabs-indicator': {
                backgroundColor: '#02A95C'
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center'
              }
            }}
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
                  '--Tab-indicatorColor': highlightColor
                    ? highlightColor
                    : '#02A95C !important'
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
              className="w-[40%] "
              label={tabsName.first}
              value={'1'}
            />

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
                  '--Tab-indicatorColor': highlightColor
                    ? highlightColor
                    : '#02A95C !important'
                }
              }}
              className="w-[40%] "
              label={tabsName.second}
              value={'2'}
            />
          </TabList>
        </Box>
        <TabPanel
          value={'1'}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 32px',
            flexDirection: 'column'
          }}
        >
          <ChoosingFlightInformation status="oneWay" />
        </TabPanel>

        <TabPanel
          value={'2'}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 32px',
            flexDirection: 'column'
          }}
        >
          <ChoosingFlightInformation
            // setErorr={()=>setCalenderErorr(false)} calenderErorr={calenderErorr}
            status="twoWay"
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
