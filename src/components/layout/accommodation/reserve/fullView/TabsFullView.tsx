'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import AboutResidence from './AboutResidence';
import LocationResidence from './LocationResidence';
import CommentsResidence from './CommentsResidence';
import CancellationResidenceRules from './CancellationResidenceRules';

export default function TabsFullView({
  tabsName,
  highlightColor = '#FFC107' // value
}: {
  highlightColor?: string;
  tabsName?: {
    first: string;
    second: string;
  };
}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', paddingTop: '8px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="w-[100%] flex "
            sx={{
              bgcolor: 'transparent',
              justifyContent: 'center !important',
              '& .MuiTabs-indicator': {
                backgroundColor: '#FFC107'
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center'
              }
            }}
          >
            <Tab
              sx={{
                fontWeight: 'bold',
                bgcolor: 'transparent',
                '& .MuiTabs-indicator': {
                  // --Tab-indicatorColor: currentColor;
                  //   borderBottom: '2px solid red !important'
                },
                '&[aria-selected="true"]': {
                  '--Tab-indicatorColor': highlightColor
                    ? highlightColor
                    : '#FFC107 !important'
                },
                '&:hover': {
                  // backgroundColor: "primary.main",
                  // borderBottom: "2px solid red !important",
                },
                '&.Mui-selected': {
                  backgroundColor: 'transparent'
                  //   borderBottom: '2px solid red !important'
                }
              }}
              className="w-[25%]"
              label={'درباره اقامتگاه'}
              value={'1'}
            />

            <Tab
              sx={{
                fontWeight: 'bold',
                bgcolor: 'transparent',
                '&:hover': {
                  // backgroundColor: "primary.main",
                },
                '&.Mui-selected': {
                  //   borderBottom: '2px solid red',
                  backgroundColor: 'transparent'
                },
                '&[aria-selected="true"]': {
                  '--Tab-indicatorColor': highlightColor
                    ? highlightColor
                    : '#FFC107 !important'
                }
              }}
              className="w-[25%] "
              label={'موقعیت مکانی'}
              value={'2'}
            />

            <Tab
              sx={{
                fontWeight: 'bold',
                bgcolor: 'transparent',
                '&:hover': {
                  // backgroundColor: "primary.main",
                },
                '&.Mui-selected': {
                  //   borderBottom: '2px solid red',
                  backgroundColor: 'transparent'
                },
                '&[aria-selected="true"]': {
                  '--Tab-indicatorColor': highlightColor
                    ? highlightColor
                    : '#FFC107 !important'
                }
              }}
              className="w-[25%] "
              label={'قوانین لغو'}
              value={'3'}
            />

            <Tab
              sx={{
                fontWeight: 'bold',
                bgcolor: 'transparent',
                '&:hover': {
                  // backgroundColor: "primary.main",
                },
                '&.Mui-selected': {
                  //   borderBottom: '2px solid red',
                  backgroundColor: 'transparent'
                },
                '&[aria-selected="true"]': {
                  '--Tab-indicatorColor': highlightColor
                    ? highlightColor
                    : '#FFC107 !important'
                }
              }}
              className="w-[25%] "
              label={'نظرات'}
              value={'4'}
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
          <AboutResidence />
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
          <LocationResidence />
        </TabPanel>

        <TabPanel
          value={'3'}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 32px',
            flexDirection: 'column'
          }}
        >
          <CancellationResidenceRules />
        </TabPanel>

        <TabPanel
          value={'4'}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 32px',
            flexDirection: 'column'
          }}
        >
          <CommentsResidence />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
