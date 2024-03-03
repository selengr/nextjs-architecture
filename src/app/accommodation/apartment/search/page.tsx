import { EnumOfRoutes } from '@/@types/accommodation/reserve';
import SearchPage from '@/components/Layout/accommodation/reserve/SearchPage';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import UiChips from '@/components/UI/ui-clickable-chips/UiChips';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import { Stack } from '@mui/material';
// test steasd shjf
const Page = () => {
  return (
    <div className="w-full overflow-hidden">
      <UiAccommodationBanner
        back={true}
        bannerPic="/static/images/msafar/raw-header-banner.svg"
        className="w-full min-h-fit"
        title={EnumOfRoutes.APARTMENT}
        alt="header"
        height={500}
        width={500}
      />

      <Stack spacing={2} className="p-3 pt-4">
        <UiChips
          chipList={[
            EnumOfRoutes.APARTMENT,
            'شهر',
            'تعداد نفرات',
            'قیمت برای هر شب'
          ]}
        />
      </Stack>

      <SearchPage routes={EnumOfRoutes.APARTMENT} />
    </div>
  );
};

export default Page;
