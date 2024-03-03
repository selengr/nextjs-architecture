import {
  Radio,
  RadioGroup,
  Typography,
  FormControl,
  FormControlLabel,
  Box,
  Stack,
  Grid
} from '@mui/material';
import { EnumOfRecidenceType } from '@/@types/accommodation/register';
import UiButton from '@/components/UI/ui-button';
import { useState } from 'react';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';

const MultiStep2_Pricing = () => {
  const router = useRouter();
  const state = useAppSelector((state) => state.register.accommodationDetails);
  const [roomType, setRoomType] = useState<string>(state.roomType);
  const handleRoom = (data: any) => {
    setRoomType(data.target.value);
  };

  const confirm = () => {
    router.push('?query=characteristics');
  };

  return (
    <Box sx={{ direction: 'ltr' }}>
      <Grid
        container
        spacing={0}
        className="w-full flex justify-end rounded-2xl mt-4 z-50 ltr"
      >
        {/* <LinearDeterminate value={20}></LinearDeterminate> */}
        <Typography
          fontWeight={'bold'}
          className="w-full text-right px-2 py-3 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          نوع قیمت گذاری اتاق ها
        </Typography>

        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-2 text-ms-thick-green "
          marginTop={'0 !important'}
          variant="body2"
          component="h4"
        >
          .دربستی یا اشتراکی بودن اتاق را برای قیمت گذاری تعیین کنید
        </Typography>

        <FormControl sx={{ width: '100%', paddingX: '1rem' }}>
          <RadioGroup
            onClick={handleRoom}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="0"
            name="radio-buttons-group"
            className="p-2 text-end mb-4"
          >
            <Typography
              className="text-ms-thick-green py-2 pb-0 pt-4 mb-0"
              fontWeight={'bold'}
              variant="body2"
              component="h4"
              gutterBottom
            >
              اتاق دربستی
            </Typography>
            <FormControlLabel
              sx={{ color: '#1B3D13' }}
              // className={styles.formLabels}
              labelPlacement="start"
              name={EnumOfRecidenceType.UNSHARED}
              value={EnumOfRecidenceType.UNSHARED}
              control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
              label=".قیمت بر اساس کل اتاق به صورت دربست به ازای یک شب تعیین شود"
              // label="اتاق دربستی"
            />

            <Typography
              className="text-ms-thick-green py-2 pb-0 pt-4 mb-0"
              fontWeight={'bold'}
              variant="body2"
              component="h5"
              gutterBottom
            >
              هر تخت در اتاق اشتراکی
            </Typography>

            <FormControlLabel
              sx={{ color: '#1B3D13' }}
              // className={styles.formLabels}
              labelPlacement="start"
              name={EnumOfRecidenceType.SHARED}
              value={EnumOfRecidenceType.SHARED}
              control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
              label=" قیمت بر اساس یک تخت یا جای خواب در اتاق به ازای یک شب برای هر
                  .نفر تعیین شود"
            />

            <Typography
              className="text-ms-thick-green py-2 pb-0 pt-4 mb-0"
              fontWeight={'bold'}
              variant="body2"
              component="h5"
              gutterBottom
            >
              واحد های مستقل
            </Typography>
            <FormControlLabel
              sx={{ color: '#1B3D13' }}
              // className={styles.formLabels}
              labelPlacement="start"
              name={EnumOfRecidenceType.MULTIPLE_UNITS}
              value={EnumOfRecidenceType.MULTIPLE_UNITS}
              control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
              label="قیمت بر اساس هر واحد به صورت دربست به ازای یک شب تعیین می شود"
            />
          </RadioGroup>
        </FormControl>
        <Stack
          sx={{
            width: '100%'
          }}
          spacing={2}
          p={2}
        >
          <UiButton
            onClick={confirm}
            type="submit"
            className="w-full hover:bg-ms-btn-green-33 text-ms-lg h-[50px] border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
            text="ثبت و ادامه"
          />
        </Stack>
      </Grid>
    </Box>
  );
};

export default MultiStep2_Pricing;
