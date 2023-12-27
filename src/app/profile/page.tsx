
import { Banner } from '@/components/UI/ui-banner';
import { PATH_BOOKING, PATH_PROFILE } from '../../routes/paths';
import ProfileItem from '@/components/Layout/profile/ProfileItem';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';


export default async function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/profile/profile-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      />




      <ProfileItem iconName='passenger-list' text='لیست مسافران' Href={PATH_BOOKING.profile+PATH_PROFILE.PASSENGERS}/>
      <ProfileItem iconName='like-icon' text='علاقه مندی ها' Href={"#"} />
      <ProfileItem iconName='refunds' text='استرداد ها' Href={"#"} />


 


      <div className="relative flex align-middle items-center">
        {/* <TransportTypeSelector /> */}
        <MobileBottomNavigation />
      </div>
    </div>
  );
}
