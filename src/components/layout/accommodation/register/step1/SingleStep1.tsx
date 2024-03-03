'use client';

import {
  Radio,
  RadioGroup,
  Typography,
  FormControl,
  FormControlLabel
} from '@mui/material';
import { EnumOfRecidenceType } from '@/@types/accommodation/register';

const SingleStep1 = ({ handleRoom }: { handleRoom: (data: any) => void }) => {
  return (
    <>
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
    </>
  );
};

export default SingleStep1;
