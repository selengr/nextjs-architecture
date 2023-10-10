"use client"

import { Banner } from '@/components/UI/ui-banner';
import UiButton from '@/components/UI/ui-button';
import UiSwitchSelector from '@/components/UI/ui-switch-selector/UiSwitchSelector';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import UiCustomizedTabOne from '@/components/UI/ui-tabs/UiCustomizedTabOne';
import UiCustomizedTabTwo from '@/components/UI/ui-tabs/UiCustomizedTabTwo';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import CustomizedOptions from '@/components/common/customized-options/CustomizedOptions';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import TabPanel from '@mui/joy/TabPanel/TabPanel';
import { Toaster, toast } from 'sonner';

import { Box } from '@mui/material';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hook';

const Flights = () => {
    
  // const {} = useAppSelector((state) => state.flight);

  const handle_search_in_tickets =()=>{

  //  if("ss"="ss"){

  //  }else {
  //   toast.error('please fill all input')
  //  }
  }

  return (
    <div className="h-full w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/flights/header_[fpdl 1.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full"
      />

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>

      <Box sx={{ height: '74px' }}></Box>

      <div className="w-full flex justify-center align-middle items-center space-t-32 ">
        <UiSwitchSelector />
      </div>

      <div className="w-full flex justify-center align-middle items-center mt-[32px] mb-[24px]">
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
           <UiCustomizedTabTwo status="oneWay" />
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
             <UiCustomizedTabTwo status="twoWay"/>
          </TabPanel>
         
        </UiCustomizedTabs>
      </div>
      {/* <CustomizedOptions value="hhh" /> */}
 
 
        <div className='mx-8'>    
        {/* <Toaster richColors/> */}
            <UiButton onClick={handle_search_in_tickets} className='mt-[24px] mb-[32px] px-6 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-[15px]' text='جستجو'/>
        </div>

    

  

      <div className='mt-24' />

    </div>
  );
};

export default Flights;
