import { EnumOfRoutes } from '@/@types/accommodation/reserve';
import SearchPage from '@/components/Layout/accommodation/reserve/SearchPage';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import UiChips from '@/components/UI/ui-clickable-chips';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import { Box, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from 'next/image';
import FormControlFunctionChild, {
  StyledTextArea
} from '@/components/common/form/FormControler';
import UiButton from '@/components/UI/ui-button';
import SaveReserverBtn from '@/components/Layout/accommodation/reserve/fullView/SaveReserverBtn';
import {
  EditReserveDate,
  EditReserveGuestInfo,
  EditReservePeople
} from '@/components/Layout/accommodation/reserve/fullView/EditReserve';

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
          <HorizontalLinearStepper activeStep={1} data={steps_data} />
        </Stack>
      </Box>

      <Stack className="bg-ms-white m-4 px-4 rounded-2xl">
        <Box className="py-4">
          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between"
          >
            <Stack
              sx={{ flexDirection: 'row' }}
              className="w-[100%] flex items-start"
            >
              <Image
                src={`/static/images/accommodation/reserve/date-icon.svg`}
                alt="room"
                width={30}
                height={30}
              />
              <Box className="flex flex-col items-start">
                <Typography
                  gutterBottom
                  fontWeight={'bold'}
                  variant="body1"
                  component="div"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  تاریخ سفر
                </Typography>
                <Typography
                  variant="body2"
                  component="h5"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  ۲۳ بهمن ـ ۲۵ بهمن
                </Typography>
              </Box>
            </Stack>

            <EditReserveDate />
          </Stack>
        </Box>

        <Box className="py-4">
          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between"
          >
            <Stack
              sx={{ flexDirection: 'row' }}
              className="w-[100%] flex items-start"
            >
              <Image
                src={`/static/images/accommodation/reserve/capacity-icon.svg`}
                alt="room"
                width={30}
                height={30}
              />
              <Box className="flex flex-col items-start">
                <Typography
                  gutterBottom
                  fontWeight={'bold'}
                  variant="body1"
                  component="div"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  تعداد نفرات
                </Typography>
                <Typography
                  variant="body2"
                  component="h5"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  0 نفر
                </Typography>
              </Box>
            </Stack>

            <EditReservePeople />
          </Stack>
        </Box>

        <Box className="py-4">
          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between"
          >
            <Stack
              sx={{ flexDirection: 'row' }}
              className="w-[100%] flex items-start"
            >
              <Image
                src={`/static/images/accommodation/reserve/gust-info-icon.svg`}
                alt="room"
                width={30}
                height={30}
              />
              <Box className="flex flex-col items-start">
                <Typography
                  gutterBottom
                  fontWeight={'bold'}
                  variant="body1"
                  component="div"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  اطلاعات مسافر
                </Typography>
                <Typography
                  variant="body2"
                  component="h5"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  علی صابری ـ 09131985255
                </Typography>
              </Box>
            </Stack>

            <EditReserveGuestInfo />
          </Stack>
        </Box>
      </Stack>

      <Stack className="bg-ms-white m-4 px-4 rounded-2xl">
        <Box className="py-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex pr-1 text-start  text-ms-thick-green"
          >
            جزییات پرداخت
          </Typography>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between pt-4"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex pr-1 text-center justify-center text-ms-thick-green"
            >
              ۱ شب 800.000 تومان
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex px-4 items-center  text-ms-thick-green"
            >
              800.000
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between pt-2"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex pr-1 text-center text-ms-thick-green"
            >
              تخفیف
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="py-0 flex px-4 items-center  text-ms-thick-green"
            >
              80.000
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <SaveReserverBtn />
    </div>
  );
};

export default Page;
