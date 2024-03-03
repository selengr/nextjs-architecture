import { EnumOfRoutes } from '@/@types/accommodation/reserve';
import SearchPage from '@/components/Layout/accommodation/reserve/SearchPage';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import UiChips from '@/components/UI/ui-clickable-chips';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import { Box, Link, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from 'next/image';
import FormControlFunctionChild, {
  StyledTextArea
} from '@/components/common/form/FormControler';
import UiButton from '@/components/UI/ui-button';
import SaveReserverBtn from '@/components/Layout/accommodation/reserve/fullView/SaveReserverBtn';
import Countdown from '@/components/common/countdown';

// tydrw dgwwndf
// tydrw dgwwndf
const steps_data: string[] = ['ثبت رزرو', 'تایید میزبان', 'پرداخت', 'پرداخت'];

const Page = () => {
  return (
    <div className="w-full overflow-hidden">
      <UiAccommodationBanner
        back={true}
        bannerPic="/static/images/msafar/raw-header-banner.svg"
        className="w-full min-h-fit"
        title={'رزرو اقامتگاه'}
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={2} data={steps_data} />
        </Stack>
      </Box>

      <Stack className="bg-ms-white m-4 pb-6 px-4 rounded-2xl">
        <Box className="py-4 flex flex-col justify-center w-full items-center">
          <Image
            src={`/static/images/accommodation/reserve/wait.svg`}
            alt="room"
            width={30}
            height={30}
            className="py-4"
          />
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex pr-1 text-start  text-ms-thick-green"
          >
            در انتظار پرداخت
          </Typography>

          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="caption"
            component="div"
            className="flex pr-1 pt-1 text-start text-ms-thick-green"
          >
            درخواست شما توسط میزبان تایید شد هم اکنون میتوانید با پرداخت
            صورتحساب رزرو خود را نهایی کنید.
          </Typography>

          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="div"
            className="flex pr-1 pt-6 text-start  text-ms-thick-green"
          >
            در انتظار پرداخت
          </Typography>

          <Stack className="pt-4">
            <Countdown />
          </Stack>

          <Box
            sx={{ direction: 'rtl', display: 'flex', textAlign: 'end' }}
            role="alert"
            className="alert alert-warning bg-[#EDF5FF] border-none my-6 p-3 flex-col items-start justify-start text-right"
          >
            <Stack
              sx={{ display: 'flex', flexDirection: 'row' }}
              className="pt-4 flex items-center align-middle"
            >
              <Image
                src={`/static/images/accommodation/reserve/tick.svg`}
                alt="room"
                width={30}
                height={30}
                className=""
              />
              <Typography
                fontWeight={'bold'}
                className="text-[#006FFF] pr-3 text-2xl text-start"
                variant="body1"
                component="h2"
              >
                با خیال راحت پرداخت کن!
              </Typography>
            </Stack>

            <Typography
              className="text-[#006FFF]  text-2xl text-start"
              // fontWeight={'bold'}
              variant="body2"
              component="h2"
            >
              پول شما تا اطمینان از ورود شما به اقامتگاه نزد ام سفر به امانت می
              ماند و در صورت وجود مشکل و مغایرت اقامتگاه جایگزین یا تمام وجه
              عودت خواهد شد.
            </Typography>
          </Box>
        </Box>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body1"
          component="div"
          className="flex pr-1 text-start  text-ms-thick-green"
        >
          با میزبانت گفتگو کن
        </Typography>
        <Typography
          gutterBottom
          // fontWeight={'bold'}
          variant="body1"
          component="div"
          className="flex pr-1 text-start  text-ms-thick-green"
        >
          هر سوالی که داری از میزبانت بپرس و هماهنگی های لازم رو قبل از پرداخت
          انجام بده
        </Typography>

        <Stack spacing={2} m={2} mt={2}>
          <UiButton
            sx={{
              backgroundColor: '#F3FCF8',
              border: '1px solid #06AB5F',
              color: '#06AB5F',
              fontWeight: 'bold'
            }}
            type="submit"
            className="m-6 mt-10 hover:bg-ms-btn-green-13 text-ms-lg h-[50px] w-full border-none text-ms-thick-green font-ms-medium rounded-2xl"
            text="گفتگو با میزبان"
          />
        </Stack>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body1"
          component="div"
          className="flex pr-1 text-start  text-ms-thick-green"
        >
        پشتیبانی جاباما در کنار شماست
        </Typography>
        <Typography
          gutterBottom
          // fontWeight={'bold'}
          variant="body1"
          component="div"
          className="flex pr-1 text-start  text-ms-thick-green"
        >
         در صورت نیاز به پشتیبانی جاباما ۲۴ ساعته در کنار شماست تا تجربه اقامت خوبی داشته باشید.
        </Typography>



        <Link href={'#'} className="flex justify-end ">
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body1"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-ms-green items-center"
        >
          پرسش های متداول
          <ArrowBackIosNewIcon
            fontSize="inherit"
            className="text-ms-green items-center"
          />
        </Typography>
      </Link>

        <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5" />


      </Stack>

      {/* <Stack my={4} sx={{display:"flex",flexDirection:"row",width:"100%"}} >
        <UiButton
          // onClick={() => router.push(path + PATH_ACCAMMODATION.confirm)}
           sx={{width:"70%",backgroundColor:"#B40000",marginRight:""}}
          type="button"
          className="hover:bg-[#B40000] text-ms-lg h-[50px] border-none text-ms-white font-ms-medium rounded-2xl"
          text="لغو اقامتگاه"
        />
        <UiButton
          // onClick={() => router.push(path + PATH_ACCAMMODATION.confirm)}
          sx={{width:"90%"}}
          type="button"
          className="hover:bg-ms-btn-green-33 text-ms-lg h-[50px] border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
          text="پرداخت"
        />
      </Stack>
     */}
    </div>
  );
};

export default Page;
