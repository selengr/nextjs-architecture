// ----------------------------------------------------------------------

// NOTE:
// rhe first page for domestic flight...

// ----------------------------------------------------------------------

import { Box } from '@mui/material';
import TabPanel from '@mui/joy/TabPanel/TabPanel';
import TransportTabs from '@/components/common/tabs/TransportTabs';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import ChoosingFlightInformation from '@/components/Layout/flight/ChoosingFlightInformation';

const Flights = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* <TransportTypeSelector type="flights" /> */}
      <UiAccommodationBanner
        back={false}
        bannerPic="/static/images/flights/flights-header-banner.svg"
        className="w-full min-h-fit"
        alt="header"
        height={500}
        width={500}
      />

      <TransportTabs control={0} />
      <Box sx={{ mt: '4rem', px: '.5rem' }}></Box>
      {/* <Box sx={{ height: '74px' }}></Box> */}

      <div className="w-full flex justify-center align-middle items-center mt-[24px] mb-[24px]">
        <UiCustomizedTabs tabsName={{ first: 'یک طرفه', second: 'دو طرفه' }} />
      </div>

      <div className="mt-28" />

      <div className="relative flex align-middle items-center">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default Flights;
