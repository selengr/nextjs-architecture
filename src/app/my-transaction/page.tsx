import { Box } from '@mui/material';
import { Banner } from '@/components/UI/ui-banner';

import TabPanel from '@mui/joy/TabPanel/TabPanel';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import ChoosingFlightInformation from '@/components/Layout/flight/ChoosingFlightInformation';
import MyTrip from '@/components/Layout/profile/MyTrip';

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/my-transaction/my-transaction-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      />

      {/* <Box sx={{ mt: '2rem', px: '.5rem' }}></Box> */}

      <div className="w-full flex justify-center align-middle items-center mt-[24px] mb-[24px]">
        <UiCustomizedTabs highlightColor="#F5BB00" tabsName={{ first: 'جاری', second: 'نهایی شده' }}>
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
          <MyTrip status={"current"} />
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
            <MyTrip status={"finalized"} />
          </TabPanel>
        </UiCustomizedTabs>
      </div>



      <div className="relative flex align-middle items-center">
        <MobileBottomNavigation />
      </div>

    </div>
  );
}
