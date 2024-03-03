'use client';

import * as yup from 'yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import MultiStep5 from '@/components/Layout/accommodation/register/step5/MultiStep5';

export const dynamic = 'force-dynamic';

const schema = yup.object().shape({});

const Page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {}
  });
  const router = useRouter();

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="توصیف موقعیت"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center">
        <MultiStep5 />
      </Box>
    </Box>
  );
};

export default Page;
