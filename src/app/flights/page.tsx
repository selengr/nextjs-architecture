"use client"

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { PATH_FLIGHT } from '@/routes/paths';
import { usePathname, useRouter } from 'next/navigation'
import { Box } from '@mui/material';
import { useState } from 'react';

import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import UiSwitchSelector from '@/components/UI/ui-switch-selector/UiSwitchSelector';
import UiCustomizedTabTwo from '@/components/UI/ui-tabs/UiCustomizedTabTwo';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import { Banner } from '@/components/UI/ui-banner';
import TabPanel from '@mui/joy/TabPanel/TabPanel';
import UiButton from '@/components/UI/ui-button';


const Flights = () => {

  const [calenderErorr,setCalenderErorr] = useState<boolean>(false)
  const flight = useAppSelector((state) => state.flight);
  const router = useRouter()  
  

  const handle_search_in_tickets = ()=>{
    const encodedData = encodeURIComponent(JSON.stringify(flight));
     if (flight.city?.destination && flight.city?.origin && (flight.fullRangeDate?.split(",").length == 2 || flight.year?.length != 0) ) {
       return router.push(`${PATH_FLIGHT.availableTickets}?query=${encodedData}`)
    }else setCalenderErorr(true)
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
            value={0}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding:"0 32px",
              flexDirection:"column"
            }}
          >
           <UiCustomizedTabTwo setErorr={()=>setCalenderErorr(false)} calenderErorr={calenderErorr} status="oneWay" />
          </TabPanel>

          <TabPanel value={1}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding:"0 32px",
                flexDirection:"column"
              }}
          >
             <UiCustomizedTabTwo setErorr={()=>setCalenderErorr(false)} calenderErorr={calenderErorr} status="twoWay"/>
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
