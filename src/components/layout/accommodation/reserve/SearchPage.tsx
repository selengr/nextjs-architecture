'use client';

import Image from 'next/image';
import {
  Box,
  Card,
  Stack,
  Container,
  Typography,
  CardContent,
  CardActionArea
} from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { EnumOfRoutes } from '@/@types/accommodation/reserve';

const SearchPage = ({ routes }: { routes: EnumOfRoutes }) => {
  const router = useRouter();
  const path = usePathname();

  const search = () => {
    router.push(path + PATH_ACCAMMODATION.search);
  };

  return (
    <Container sx={{ mb: 5 }}>
      <Box className="w-full flex flex-row items-center">
        <Typography
          fontWeight={'bold'}
          className="w-full text-ms-thick-green pr-2"
          marginTop={'0 !important'}
          variant="h6"
          component="h5"
        >
          رزرو {routes}
        </Typography>
      </Box>

      <Stack className="w-full mt-4 space-y-4" spacing={2}>
        {[31, 32, 33, 31, 32, 33].map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <Card
            sx={{ width: '100%', boxShadow: 'none', borderRadius: '15px' }}
            className="rounded-2xl flex flex-row shadow-none border-none my-2 bg-ms-back-card-gray-12"
          >
            <CardActionArea
              sx={{ display: 'flex' }}
              className="flex flex-col w-full h-full"
            >
              <Image
                className="w-[95%] my-2"
                src={`/static/images/accommodation/_mock/_mock${item}.svg`}
                alt="room"
                width={0}
                height={0}
              />
              <CardContent className="flex flex-col w-full">
                <Box className="w-[60%] sm:w-[70%] flex flex-col items-start justify-between">
                  <Typography
                    fontWeight={'bold'}
                    gutterBottom
                    variant="body1"
                    component="div"
                    className="flex flex-row m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
                  >
                    رزرو بوم گردی دو خوابه مهر ۴ نادری
                  </Typography>
                  <Typography
                    gutterBottom
                    // fontWeight={'bold'}
                    variant="body2"
                    component="div"
                    className="flex flex-row m-0 align-middle items-center text-[#898888]  font-ms-bold pr-1"
                  >
                    مازندران چالوس ۲ اتاق ۴ نفر پایه+۲ نفر اضافه
                  </Typography>
                </Box>

                <Stack
                  sx={{ flexDirection: 'row' }}
                  className="w-[100%] flex items-start justify-end py-2"
                >
                  <Stack
                    sx={{ m: 0, width: '40%' }}
                    className="border-[1px] m-[0px] border-ms-crimson-300 rounded-2xl bg-[#FFF1F1] px-4 p-[5px]"
                  >
                    <Typography
                      sx={{ m: 0 }}
                      gutterBottom
                      fontWeight={'bold'}
                      variant="body2"
                      component="div"
                      className="flex m-0 text-center justify-center text-ms-crimson-300  font-ms-bold"
                    >
                      تا ۲۵٪ درصد تخفیف
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ width: '60%' }}
                    //   fontWeight={'bold'}
                    gutterBottom
                    variant="body1"
                    component="div"
                    className="flex flex-row pr-4 m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
                  >
                    شروع قیمت :
                    <span className="font-ms-bold">800.000 تومان &nbsp;</span>{' '}
                    هر شب
                  </Typography>
                </Stack>

                <Stack
                  sx={{ flexDirection: 'row' }}
                  className="w-[100%] flex items-center justify-between px-2"
                >
                  <Typography
                    sx={{ m: 0 }}
                    gutterBottom
                    fontWeight={'bold'}
                    variant="body2"
                    component="div"
                    className="flex m-0 text-center justify-center text-ms-thick-green"
                  >
                    (۲۹ نظر ثبت شده)
                  </Typography>

                  <Stack
                    sx={{ m: 0, flexDirection: 'row', display: 'flex' }}
                    className="border-[1px] m-[0px] border-ms-yellow-500 rounded-2xl bg-ms-yellow-200 px-4 p-[5px]"
                    onClick={() =>
                      router.push(path?.replace("search","") + PATH_ACCAMMODATION.fullview)
                    }
                  >
                    <Image
                      src={`/static/images/accommodation/reserve/wait-indicator.svg`}
                      alt="room"
                      width={25}
                      height={25}
                    />
                    <Typography
                      sx={{ m: 0 }}
                      gutterBottom
                      fontWeight={'bold'}
                      variant="body2"
                      component="div"
                      className="flex m-0 align-middle items-center pr-2 text-ms-thick-green  font-ms-bold"
                    >
                      لحظه آخری برای امروز
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default SearchPage;
