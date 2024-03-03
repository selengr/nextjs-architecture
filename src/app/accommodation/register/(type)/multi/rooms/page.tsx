'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

const Page = () => {
  const router = useRouter();

  const confirm = () => {
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.multiple +
        PATH_ACCAMMODATION.address
    );
  };

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title=" اتاق ها"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col  px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white  rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={3} />
        </Stack>

        <Box className="w-full flex flex-row items-center py-4">
          <Typography
            fontWeight={'bold'}
            className="w-full text-ms-thick-green pr-4"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            عکس اتاق ها.
          </Typography>
          <Link
            href={
              PATH_ACCAMMODATION.accommodation +
              PATH_ACCAMMODATION.register +
              PATH_ACCAMMODATION.multiple +
              PATH_ACCAMMODATION.addRoom +
              '?query=pricing'
            }
            className="w-[50%]"
          >
            <UiButton
              sx={{
                border: '2px solid #02A95C',
                borderRadius: '15px',
                backgroundColor: '#F3FCF8',
                color: '#03693A'
              }}
              className="bg-ms-btn-green-13 w-full py-4 flex-row-reverse border-ms-border-green-33 px-6 p-4 border-solid border-2 font-ms-bold text-ms-lg h-[40px] text-ms-medium-green rounded-xl"
              text="ثبت اتاق جدید"
            ></UiButton>
          </Link>
        </Box>

        <Stack className="w-full mt-4 space-y-4" spacing={2}>
          {[1, 2, 1, 2, 1, 2].map((item, index) => (
            <Card
              key={index}
              sx={{ width: '100%', boxShadow: 'none', borderRadius: '15px' }}
              className="rounded-2xl flex flex-row shadow-none border-none my-2 bg-ms-back-card-gray-12"
            >
              <CardActionArea
                sx={{ display: 'flex' }}
                className="flex flex-col w-full h-full"
              >
                <Image
                  className="w-[95%] my-2"
                  src={`/static/images/accommodation/_mock/_mock-room.svg`}
                  alt="room"
                  width={0}
                  height={0}
                />
                <CardContent className="flex flex-row w-full justify-between">
                  <Box className="w-[60%] sm:w-[70%] flex flex-col items-start justify-between">
                    <Typography
                      fontWeight={'bold'}
                      gutterBottom
                      variant="body1"
                      component="div"
                      className="flex flex-row m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
                    >
                      اتاق لاله {index + 1}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      className="flex flex-row m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
                    >
                      طبقه دوم ظرفیت ۲ نفر
                    </Typography>
                  </Box>

                  <Stack
                    sx={{ flexDirection: 'row' }}
                    className="w-[30%] flex items-start justify-end"
                  >
                    <CardMedia
                      component="img"
                      className="max-w-[40px] ml-2"
                      image={`/static/images/accommodation/edit.svg`}
                      alt="green iguana"
                    />
                    <CardMedia
                      component="img"
                      className="max-w-[40px]"
                      image={`/static/images/accommodation/delete.svg`}
                      alt="green iguana"
                    />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
      <Stack spacing={2} m={2} mt={4}>
        <UiButton
          onClick={confirm}
          className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
          text="ثبت و ادامه"
        />
      </Stack>
    </Box>
  );
};

export default Page;
