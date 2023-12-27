import { Banner } from '@/components/UI/ui-banner';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';

const page = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <TransportTypeSelector type="msafar" />
      <div className="relative flex align-middle items-center">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default page;
