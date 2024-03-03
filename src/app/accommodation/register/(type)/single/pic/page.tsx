'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { FileUploader } from '@/components/common/fileUploader';
import { saveAccommodationDetails } from '@/redux/slices/accommodation/register';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

export const dynamic = 'force-dynamic';

const Page = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector<any>(
    (state) => state.register.accommodationDetails
  );
  const router = useRouter();
  console.log('stateeeeeeeeeeeeeee page :>> ', state);

  const [files, setFiles] = useState<any>([]);

  const handleUpdateFiles = (fileItems: any) => {
    console.log('fileItems :>> ', fileItems);
    setFiles(fileItems.map((fileItem: any) => fileItem.file));
  };

  const confirm = () => {
    if (files.length >= 2) {
      dispatch(
        saveAccommodationDetails({ name: 'accommodationImages', value: files })
      );
      router.push(
        PATH_ACCAMMODATION.accommodation +
          PATH_ACCAMMODATION.register +
          PATH_ACCAMMODATION.single +
          PATH_ACCAMMODATION.address
      );
    } else toast.error('حداقل 2 تصویر بارگذاری شود');
  };

  const caption = [
    'تصاویر تاثیر زیادی در تصمیم گیری مهمان برای انتخاب اقامتگاه شما و این اتاق دارند.',
    'تصاویری را که شامل امکانات و ویژگی های اقامتگاه است انتخاب کنید.',
    'تصاویر فضای کلی اقامتگاه و بخشهای اشتراکی و هر  تصویری که مرتبط با این اقمتگاه نیست را در این بخش  بارگذاری نکنید.',
    'تصاویری را با کیفیت پایین و زاویه دید نا مناسب انتخاب  نکنید.'
  ];

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="ثبت اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white  rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={3} />
        </Stack>
        <Grid
          container
          spacing={0}
          className="w-full flex justify-end rounded-2xl mt-4 z-50 ltr"
        >
          {/* <LinearDeterminate value={20}></LinearDeterminate> */}
          <Typography
            fontWeight={'bold'}
            className="w-full text-right py-5 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            .تصاویر اقامتگاه را انتخاب و بار گذاری کنید
          </Typography>

          <Stack spacing={4} className="w-full p-6">
            <FileUploader
              handleUpdateFiles={handleUpdateFiles}
              files={files}
              title="بارگذاری تصاویر اقامتگاه "
              caption=" حداقل ۲ تصویر بارگذاری کنید."
            />
          </Stack>
        </Grid>

        <List sx={{ width: '100%' }}>
          {caption.map((value,key) => {
            return (
              <ListItemButton key={key} component="a" href="#simple-list">
                <CircleIcon
                  sx={{ width: '12px', color: '#F5BB00', marginLeft: '4px' }}
                />
                <ListItemText
                  sx={{
                    direction: 'rtl',
                    display: 'flex',
                    textAlign: 'justify',
                    color: '#1B3D13',
                    fontSize: '10px'
                  }}
                  primary=""
                />
                <Typography
                  className="w-full text-right text-ms-thick-green"
                  marginTop={'0 !important'}
                  variant="body2"
                  component="h4"
                >
                  {value}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>

        <Stack spacing={4} className="w-full my-8">
          <UiButton
            onClick={confirm}
            type="button"
            className=" hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
            text="ثبت و ادامه"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
