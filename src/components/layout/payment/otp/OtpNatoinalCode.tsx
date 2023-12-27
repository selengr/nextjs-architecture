import * as yup from 'yup';
import Image from 'next/image';
import callApi from '@/services/axios';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import UiButton from '@/components/UI/ui-button';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomField } from '../../flight/actions/PassengersFormActions';

type Inputs = {
  nationalCode: string;
};

const OtpNatoinalCode = ({
  issueRequestId,
  setOtp
}: {
  issueRequestId: number | undefined;
  setOtp: (value: boolean) => void;
}) => {
  const schema = yup.object().shape({
    nationalCode: yup
      .string()
      .required('کد ملی الزامی می باشد')
      .matches(/^\d{10}$/, 'کد ملی اشتباه می باشد')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { nationalCode: '' }
  });

  const onSubmit = (data: Inputs) => {
    let model = {
      nationalCode: data.nationalCode,
      issueRequestId: issueRequestId
    };
    async function IssueRequest() {
      try {
        const response: any = await callApi().post(
          '/msafar/issue-request/otp-send',
          model
        );
        setOtp(true);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }
    IssueRequest();
  };
  console.log('errors :>> ', errors);

  const NationalCardField = ({ register, errors, edit }: any) => {
    return (
      <CustomField
        register={register}
        errors={errors}
        id="nationalCode"
        label=""
        name="nationalCode"
        styleClass="bg-[#F1F3F8] text-ms-lg font-ms-bold mb-4 mx-2"
        // ValidationSchema={Yup.string().required("کد ملی الزامی است.").min(10, "کد ملی باید حداقل 10 رقم داشته باشد.").max(10, "کد ملی باید حداکثر 10 رقم داشته باشد.")}
      />
    );
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
        لطفا کد ملی خود را وارد کنید.
      </Typography>

      <form className="-mt-4" onSubmit={handleSubmit(onSubmit)}>
        <NationalCardField register={register} errors={errors} />

        <UiButton
          // onClick={() => console.log("object")}
          type="submit"
          className="m-8 p-2 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-[15px] bg-ms-btn-green-23"
          text="ارسال کد دو عاملی"
        />
      </form>
    </Box>
  );
};

export default OtpNatoinalCode;
