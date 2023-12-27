// ----------------------------------------------------------------------

// NOTE:
// rhe first page for domestic flight...

// ----------------------------------------------------------------------

import { Box } from '@mui/material';
import TabPanel from '@mui/joy/TabPanel/TabPanel';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import ChoosingFlightInformation from '@/components/Layout/flight/ChoosingFlightInformation';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';

const Flights = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <TransportTypeSelector type="flights" />

      <Box sx={{ mt: '4rem', px: '.5rem' }}></Box>
      {/* <Box sx={{ height: '74px' }}></Box> */}

      <div className="w-full flex justify-center align-middle items-center mt-[24px] mb-[24px]">
        <UiCustomizedTabs tabsName={{ first: 'یک طرفه', second: 'دو طرفه' }}>
          <TabPanel
            value={0}
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
            value={1}
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
        </UiCustomizedTabs>
      </div>

      <div className="mt-28" />

      <div className="relative flex align-middle items-center">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default Flights;
