import { Banner } from '@/components/UI/ui-banner';
import {
  PATH_ACCAMMODATION,
  PATH_BOOKING,
  PATH_PROFILE
} from '../../routes/paths';
import ProfileItem from '@/components/Layout/profile/ProfileItem';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';

export default async function Home() {
  return (
    <div className="h-full w-full overflow-hidden pb-16">
      <Banner
        bannerPic="/static/images/profile/profile-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      />

      <ProfileItem
        iconName="passenger-list"
        text="لیست مسافران"
        Href={PATH_BOOKING.profile + PATH_PROFILE.PASSENGERS}
      />
      <ProfileItem iconName="like-icon" text="علاقه مندی ها" Href={'#'} />
      <ProfileItem iconName="refunds" text="استرداد ها" Href={'#'} />
      <ProfileItem
        iconName="myResidences"
        text="ثبت اقامتگاه"
        Href={PATH_ACCAMMODATION.accommodation}
      />
      <ProfileItem
        iconName="myResidences"
        text=" اقامتگاه های من"
        Href={
          PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.myResidences
        }
      />
      <ProfileItem
        iconName="processingOrders"
        text=" رسیدگی به سفارشات"
        Href={'#'}
      />

      <div className="relative flex align-middle items-center">
        {/* <TransportTypeSelector /> */}
        <MobileBottomNavigation />
      </div>
    </div>
  );
}
