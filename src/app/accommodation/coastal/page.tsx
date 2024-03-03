import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import TransportTabs from '@/components/common/tabs/TransportTabs';
import SelectingCity from '@/components/Layout/accommodation/reserve/SelectingCity';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';

const Page = () => {
  return (
    <div className="w-full overflow-hidden">
      <UiAccommodationBanner
        back={true}
        bannerPic="/static/images/msafar/raw-header-banner.svg"
        className="w-full min-h-fit"
        title="ساحلی"
        alt="header"
        height={500}
        width={500}
      />

      <TransportTabs control={1} />

      <SelectingCity />
    </div>
  );
};

export default Page;
