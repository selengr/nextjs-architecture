// "use client"

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// const AntTabs = styled(Tabs)({
//   borderBottom: '1px solid #EDEBEB',
//   display:"flex",
//   justifyContent:"center",
//   alignItems:"center",
//   width : "100%",
//   '& .MuiTabs-indicator': {
//     backgroundColor: '#02A95C',
   
//   },
// });

// const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     minWidth: 0,
//     display:"flex",
//   justifyContent:"center",
//   alignItems:"center",
//     [theme.breakpoints.up('sm')]: {
//       minWidth: 0,
//     },
//     fontFamily : "iranSansMobile",
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(1),
//     color: 'rgba(0, 0, 0, 0.85)',
  
   
//     '&:hover': {
//       color: '#000',
//       opacity: 1,
//     },
//     '&.Mui-selected': {
//       color: '#1B3D13',
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: '#02A95C',
//     },
//   }),
// );




// interface StyledTabProps {
//   label: string;
// }


// export default function UiCustomizedTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ bgcolor: '' }} >
//           <AntTabs value={value} className='font-ms-iranSansMobile' onChange={handleChange} 
//              // aria-label="ant example"
//           >
//           <div>
//                   <AntTab label="دو طرفه" />
//           </div>
//            <div>  <AntTab label="یک طرفه" />
//           </div>
//         </AntTabs>
//         {/* <Box sx={{ p: 3 }} /> */}
//       </Box>
//     </Box>
//   );
// }





"use client"

import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function UICustomizedTabs({
  children
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = React.useState(0);
  return (
    <Tabs
    sx={{bgcolor:"transparent",
    '& .MuiTabs-indicator': {
      backgroundColor: '#02A95C',
      borderBottom: "3px solid red",
    },
    }}  className="w-[100%] flex justify-center items-center" aria-label="Basic tabs" defaultValue={0}>
      <TabList sx={{bgcolor:"transparent",borderBottom:"1px solid #EDEBEB" }} className="w-[100%] flex justify-center items-center">
      
      <Tab 
         sx={{
          bgcolor:"transparent",
          "&:hover": {
            // backgroundColor: "primary.main",
          },
          "&.Mui-selected": {
            borderBottom: "3 solid #02A95C",
            // backgroundColor: "transparent",
          },
        }}
             className="w-[40%]">دو طرفه
             </Tab>
      
        <Tab
        sx={{
          bgcolor:"transparent",
          '& .MuiTabs-indicator': {
            backgroundColor: '#02A95C',
            borderBottom: "3px solid red",
          },
          "&:hover": {
            // backgroundColor: "primary.main",
            // borderBottom: "3px solid red",
          },
          "&.Mui-selected": {
            // backgroundColor: "transparent",
            // borderBottom: "3px solid red",
          },          
        }}
           
        className="w-[40%]">یک طرفه
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