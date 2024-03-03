'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  EnumOfArea,
  IListOfArea,
  IPageProps
} from '@/@types/accommodation/register';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  styled
} from '@mui/material';
import OriginVeiw from '../../OriginVeiw';
import UiButton from '@/components/UI/ui-button/UiButton';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import CustomMultiDatePicker from '@/components/common/calanders/CustomMultiDatePicker';
import { usePathname, useRouter } from 'next/navigation';
import { PATH_ACCAMMODATION } from '@/routes/paths';

let data: IListOfArea[] = [
  { text: 'بوشهر', images: '_mock30_boshahr.svg', enum: EnumOfArea.URBAN },
  { text: 'هرمز', images: '_mock27_hormoz.svg', enum: EnumOfArea.DESERT },
  { text: 'اصفهان', images: '_mock25_asfehan.svg', enum: EnumOfArea.WOODSY },
  { text: 'قشم', images: '_mock28_gheshm.svg', enum: EnumOfArea.COASTAL },
  { text: 'شیراز', images: '_mock26_shiraz.svg', enum: EnumOfArea.RURAL },
  { text: 'تبریز', images: '_mock23_tabriz.svg', enum: EnumOfArea.MOUNTAINOUS },
  { text: 'کیش', images: '_mock29_kish.svg', enum: EnumOfArea.MOUNTAINOUS },
  { text: 'یزد', images: '_mock24_yazd.svg', enum: EnumOfArea.MOUNTAINOUS }
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F8F8F8',
  textAlign: 'center',
  boxShadow: 'none',
  borderRadius: '15px'
}));

// const SelectingCity = ({ params, searchParams }: IPageProps) => {
const SelectingCity = () => {
  const [isOpenCity, setOpenCity] = useState(false);
  const [isOpenDate, setOpenDate] = useState(false);
  const setArea = (value: string) => {};

  const onCloseCity = () => setOpenCity(false);
  const onCloseDate = () => setOpenDate(false);

  const router = useRouter();
  const path = usePathname();

  const handleDepartureDate = (time: any) => {
    // dispatch(
    //   setDate({
    //     departing: time.toString()
    //   })
    // );
  };

  const search = () => {
    router.push(path + PATH_ACCAMMODATION.search);
  };

  return (
    <Container sx={{ mb: 5 }}>
      <Box>
        <Stack className="bg-ms-white mt-8 rounded-2xl">
          <Box sx={{ flexGrow: 1, px: 3, py: 2, width: '100%' }}>
            <Item
              sx={{
                my: 2,
                p: 2,
                width: '100%'
              }}
            >
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                onClick={() => setOpenCity(true)}
              >
                <Image
                  src={`/static/images/accommodation/reserve/location-icon.svg`}
                  alt={'location'}
                  width={25} //automatically provided
                  height={25} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className=""
                />
                <Typography
                  noWrap
                  variant="subtitle2"
                  fontWeight={'bold'}
                  className="px-2 text-ms-light-gray-300"
                >
                  انتخاب شهر
                </Typography>
              </Stack>
            </Item>
            <Item
              sx={{
                my: 2,
                p: 2,
                width: '100%'
              }}
            >
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                onClick={() => setOpenDate(true)}
              >
                <Stack>
                  <Image
                    src={`/static/images/accommodation/reserve/date-icon.svg`}
                    alt={'location'}
                    width={25} //automatically provided
                    height={25} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    className=""
                  />
                </Stack>
                <Stack sx={{ minWidth: 0 }}>
                  <Typography
                    noWrap
                    variant="subtitle2"
                    fontWeight={'bold'}
                    className="px-2 text-ms-light-gray-300"
                  >
                    انتخاب تاریخ
                  </Typography>
                </Stack>
              </Stack>
            </Item>
            <UiButton
              onClick={search}
              sx={{ my: '12px !important' }}
              className="bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-white w-full py-8 border-ms-border-green-33 px-6 p-4 border-solid border-2 font-ms-bold text-ms-lg h-[48px] rounded-2xl"
              text="جستجو"
            ></UiButton>
          </Box>
        </Stack>

        <Stack className="bg-ms-white mt-8 rounded-2xl">
          <Typography
            className="text-ms-thick-green text-ms-lg p-4"
            marginTop={'0 !important'}
            variant="body1"
            component="h2"
            fontWeight={'bold'}
          >
            شهر های پیشنهادی
          </Typography>
          <Grid container spacing={0} className="flex justify-center pb-4">
            {data.map((value, key) => (
              <Stack
                key={key}
                onClick={() => setArea(value.enum)}
                className={`${
                  'ssssstest' == value.enum ? 'residence-type-bg' : ''
                } accommodation-type-card hover:text-ms-light-green rounded-2xl flex flex-col justify-center mx-2 pb-2 mb-2`}
                spacing={1}
              >
                <Image
                  src={`/static/images/accommodation/_mock/${value.images}`}
                  alt={'alt'}
                  width={0} //automatically provided
                  height={0} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className={`${
                    'test' == value.enum ? 'residence-type-card' : ''
                  } accommodation-type-pic w-full h-24 rounded-2xl`}
                />
                <Typography
                  className="text-center hover:text-ms-light-green text-ms-thick-green text-ms-lg"
                  marginTop={'0 !important'}
                  variant="body2"
                  component="h2"
                  fontWeight={'bold'}
                >
                  {value.text}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Box>

      {isOpenCity && (
        <div>
          <ModalGestures
            title="انتخاب مبدا"
            isOpen={isOpenCity}
            onClose={onCloseCity}
            initialSnap={1}
          >
            <OriginVeiw onClose={() => setOpenCity(false)} />
          </ModalGestures>
        </div>
      )}

      {isOpenDate && (
        <div>
          <ModalGestures
            title="تاریخ رفت"
            isOpen={isOpenDate}
            onClose={onCloseDate}
            className="overflow-scroll"
            initialSnap={1}
          >
            <CustomMultiDatePicker
              value={''}
              onChange={handleDepartureDate}
              selectDateRange={false}
              dateFormat="YYYY/MM/DD"
              locale={'persian'}
              theme="dark"
            />
            <div className="flex flex-row justify-between items-center mt-6 text-[#969696] text-ms-xs w-full">
              {/* {flight.departing && ( */}
              <span className="px-2 text-[#000] text-ms-sm">
                {' '}
                رفت
                <span className="text-[#969696] text-ms-xs">
                  {' '}
                  ssssssssssssss
                  {/* &nbsp; {flight.departing.toString().split('/')[2]}{' '} */}
                  {/* {flight.departing.toString().split('/')[1]} */}
                </span>
              </span>
              {/* )} */}
            </div>

            <UiButton
              // onClick={handleDeparture}
              className="top-5 bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
              text="تایید"
            />
          </ModalGestures>
        </div>
      )}
    </Container>
  );
};

export default SelectingCity;
