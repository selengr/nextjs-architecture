import UiButton from '@/components/UI/ui-button';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CustomField } from '../../flight/actions/PassengersFormActions';
import OtpInput from 'react-otp-input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import CustomOtpInput from './CustomOtpInput';
import callApi from '@/services/axios';
import { TAccount } from '@/components/UI/customized_combo';

type Inputs = {
  verifyCode: number;
};

interface CustomerAccountDto {
  accountId: number;
  creditType: string;
  creditTypeEnum: string;
  totalAmount: number;
  availableAmount: number;
  order: number;
  expireDate: object | null;
}
interface CustomerAccountRequest {
  confirmCode: string;
  customerAccountDtoList: CustomerAccountDto[];
}

const OtpVerifycode = ({
  issueRequestId,
  chosenCredits
}: {
  issueRequestId: number | undefined;
  chosenCredits: TAccount[];
}) => {
  const [otp, setOtp] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [sendCode, updateSendCode] = useState(false);

  const schema = yup.object().shape({
    verifyCode: yup.number().required('کد تایید وارد شود')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { verifyCode: 0 }
  });

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      }
    }, 1000);

    // Clear the timer when component unmounts
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handle_send_code = () => {
    updateSendCode(true);
  };
  const onSubmit = (data: Inputs) => {
    console.log('otp :>> ', otp);
    console.log('data :>> ', data);
    let model: CustomerAccountRequest = {
      confirmCode: otp,
      customerAccountDtoList: chosenCredits
    };
    model.customerAccountDtoList.map((item) => {
      if (typeof item.expireDate == 'string') {
        item.expireDate = null;
      }
    });
    try {
      const response: any = callApi().post(
        `/msafar/booking/${issueRequestId}`,
        model
      );
      console.log('response :>> ', response);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
    // updateSendCode(true);
  };

  const resent_confirmcode = () => {
    if (sendCode) {
      if (secondsLeft === 0) {
        return (
          <Typography
            onClick={handle_send_code}
            variant="subtitle2"
            component="span"
            className="text-ms-sm font-ms-medium text-ms-crimson cursor-pointer"
          >
            {`دریافت مجدد کد تایید `}
          </Typography>
        );
      } else {
        return (
          <Typography
            variant="subtitle2"
            component="span"
            className="text-ms-sm font-ms-medium text-ms-crimson"
          >
            {`دریافت مجدد کد تایید در: ${secondsLeft} ثانیه`}
          </Typography>
        );
      }
    }
  };

  return (
    <Box className="flex flex-col p-4 bg-ms-white rounded-2xl">
      <div className="flex flex-row">
        <Image
          className="ml-2 mr-4"
          src={`/static/icons/components/otp_lock.png`}
          alt={'flight'}
          width={20} //automatically provided
          height={20} //automatically provide
        />

        <Typography
          variant="body1"
          component="span"
          className="text-[#03693A] font-ms-bold"
        >
          احراز هویت
        </Typography>
      </div>

      <Typography
        sx={{ fontWeight: '700' }}
        variant="subtitle1"
        component="span"
        className="text-center text-ms-lg text-[#282832] font-ms-iranSansMobile pt-6"
      >
        کد دو عاملی برای شما ارسال شد لطفا کد را در کادر زیر وارد کنید
      </Typography>

      <form className="mt-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center ltr">
          <CustomOtpInput
            otp={otp}
            setOtp={setOtp}
            numInputs={6}
            inputStyle={{
              color: '#06AB5F',
              backgroundColor: '#F1F3F8',
              borderRadius: '12px',
              margin: '4px',
              width: '50px',
              height: '60px',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          />
        </div>

        <div className="mt-6 w-full">
          {resent_confirmcode()}
          {sendCode && (
            <UiButton
              type="submit"
              className="m-8  p-2 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
            >
              تایید کد دو عاملی
            </UiButton>
          )}
        </div>
      </form>

      {!sendCode && (
        <UiButton
          onClick={handle_send_code}
          type="button"
          className="m-8 p-2 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
        >
          ارسال کد دو عاملی
        </UiButton>
      )}
    </Box>
  );
};

export default OtpVerifycode;
