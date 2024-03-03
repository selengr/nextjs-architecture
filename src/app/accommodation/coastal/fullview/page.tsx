
import TabsFullView from '@/components/Layout/accommodation/reserve/fullView/TabsFullView';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';




const Page = () => {
  return (
    <div className="w-full overflow-hidden">
      <UiAccommodationBanner
        back={true}
        bannerPic="/static/images/msafar/raw-header-banner.svg"
        className="w-full min-h-fit"
        title="اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <TabsFullView />

    </div>
  );
};

export default Page;
