"use client"

import { Banner } from '@/components/UI/ui-banner';
import UiSwitchSelector from '@/components/UI/ui-switch-selector/UiSwitchSelector';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import UiCustomizedTabOne from '@/components/UI/ui-tabs/UiCustomizedTabOne';
import UiCustomizedTabTwo from '@/components/UI/ui-tabs/UiCustomizedTabTwo';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import TabPanel from '@mui/joy/TabPanel';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const Flights = () => {
    const [isOpen, setOpen] = useState(false);
    
    const onOpen =()=> {
        setOpen(true)
    }
    const onClose =()=> {
        setOpen(true)
    }

  return (
    <div className="h-full w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/flights/header_[fpdl 1.svg"
        alt="header"
        width={500}
        height={500}
      />

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>

      <Box sx={{ height: '74px' }}></Box>

      <div className="w-full flex justify-center align-middle items-center space-t-32">
        <UiSwitchSelector />
      </div>

      <div className="w-full flex justify-center align-middle items-center mt-[32px]">
        <UiCustomizedTabs>
          <TabPanel
            value={1}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding:"0 32px",
              flexDirection:"column"
            }}
          >
           <UiCustomizedTabOne />
          </TabPanel>

          <TabPanel value={0}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding:"0 32px",
                flexDirection:"column"
              }}
          >
             <UiCustomizedTabTwo />
          </TabPanel>
         
        </UiCustomizedTabs>
      </div>

      <div >
                <button onClick={onOpen}>Open sheet</button>
                <button onClick={onClose}>close sheet</button>
      <ModalGestures isOpen={isOpen} onClose={onClose}>
            <h1>
                lets test sss
            </h1>
            <h1>
                lets test sss
            </h1>
            <h1>
                lets test sss
            </h1>
            <h1>
                lets test sss
            </h1>
            <h1>
                lets test sss
            </h1>
        </ModalGestures>
    </div>

 
      <div className="w-full flex justify-center align-middle items-center mt-[24px] mb-[32px]">
        <button className="h-[50px] w-full border-none text-ms-white font-ms-medium mx-[32px] bg-ms-btn-green-23 rounded-[15px]">
          جستجو
        </button>
      </div>

      <div className='mt-24' />

    </div>
  );
};

export default Flights;
