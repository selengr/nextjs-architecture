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
import CardFlight from '@/components/Layout/CardFlight';
import PriceCalendar from '@/components/Layout/PriceCalendar';

const AvailableTickets = () => {
    

  return (
    <div className="h-full w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/flights/header-available-tickets.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full"
      />

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>

      <Box sx={{ height: '74px' }}></Box>

{/* ======================================== */}

<div>
  <PriceCalendar />
</div>


          <div className='p-6'>
              <CardFlight flights={[1,2,3,4,5,6,7,8,9,10]} />
         </div>

   
 
        <div className='mx-8'>    
              <div className='w-full flex flex-row bg-ms-white h-[50px] justify-center items-center rounded-3xl border-[1px] border-[#E4E4E4]'>
                <span className='w-1/3 pl-4 flex items-center h-full'>
                <Image
                  className="ml-2 mr-4"
                  src={`/static/images/flights/arrow-right.svg`}
                  alt={'flight'}
                  width={11} //automatically provided
                  height={8} //automatically provide
                /> 
                  روز قبل
              
                </span>
                <div className='w-1/3 flex justify-center'>
                <Image
                  className="ml-1"
                  src={`/static/images/flights/filter-icon.svg`}
                  alt={'flight'}
                  width={42} //automatically provided
                  height={42} //automatically provide
                />
                </div>
                <span className='w-1/3 flex justify-end pl-4 items-center h-full'>روز بعد
                <Image
                  className="rotate-180 mr-2"
                  src={`/static/images/flights/arrow-right.svg`}
                  alt={'flight'}
                  width={11} //automatically provided
                  height={8} //automatically provide
                />
                </span>
              </div>
         </div>

    

  

      <div className='mt-24' />

    </div>
  );
};

export default AvailableTickets;

