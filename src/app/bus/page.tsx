import { Box } from '@mui/material';

import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import { Banner } from '@/components/UI/ui-banner';


const Bus = () => {



  return (
    <div className="h-full w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/bus/bus-header-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full"
      />

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>

      <Box sx={{ height: '74px' }}></Box>

     

    </div>
  );
};

export default Bus;
