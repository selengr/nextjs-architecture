// import UiButton from '@/components/UI/ui-button';
// import { Checkbox, Stack, Typography } from '@mui/material';
// import { useForm, Controller, SubmitHandler } from 'react-hook-form';

// interface IFormInputs {
//   TextField: string;
//   MyCheckbox: boolean;
//   MyCheckbox2: boolean;
//   MyCheckbox3: boolean;
// }

// export default function RefundReason() {
//   const { handleSubmit, control, reset } = useForm<IFormInputs>({
//     defaultValues: {
//       MyCheckbox: false,
//       MyCheckbox2: false,
//       MyCheckbox3: false
//     }
//   });
//   const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <Stack direction="row" spacing={2} className=" flex items-center">
//         <Controller
//           name="MyCheckbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Checkbox sx={{ color: '#F5BB00' }} color="warning" {...field} />
//           )}
//         />
//         <Typography variant="body1" component={'label'}>
//           دلایل شخصی مسافر
//         </Typography>
//       </Stack>

//       <Stack direction="row" spacing={2} className=" flex items-center">
//         <Controller
//           name="MyCheckbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Checkbox sx={{ color: '#F5BB00' }} color="warning" {...field} />
//           )}
//         />
//         <Typography variant="body1" component={'label'}>
//               تاخیر بیش از دو ساعت
//         </Typography>
//       </Stack>

//       <Stack direction="row" spacing={2} className=" flex items-center">
//         <Controller
//           name="MyCheckbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Checkbox sx={{ color: '#F5BB00' }} color="warning" {...field} />
//           )}
//         />
//         <Typography variant="body1" component={'label'}>
//         تعجیل بیش از ۹۰ دقیقه
//         </Typography>
//       </Stack>

//       <Stack direction="row" spacing={2} className=" flex items-center">
//         <Controller
//           name="MyCheckbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Checkbox sx={{ color: '#F5BB00' }} color="warning" {...field} />
//           )}
//         />
//         <Typography variant="body1" component={'label'}>
//         ابطال پرواز از سمت ایر لاین
//         </Typography>
//       </Stack>

//       <Stack direction="row" spacing={2} className=" flex items-center">
//         <Controller
//           name="MyCheckbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Checkbox sx={{ color: '#F5BB00' }} color="warning" {...field} />
//           )}
//         />
//         <Typography variant="body1" component={'label'}>
//         ابطال به دلیل بدی آب و هوا
//         </Typography>
//       </Stack>

//       <Stack direction="row" spacing={2} className=" flex items-center">
//         <Controller
//           name="MyCheckbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Checkbox sx={{ color: '#F5BB00' }} color="warning" {...field} />
//           )}
//         />
//         <Typography variant="body1" component={'label'}>
//         ابطال پرواز رفت
//         </Typography>
//       </Stack>

//       <UiButton
//           // onClick={() => console.log("object")}
//           type="submit"
//           className="m-6 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-[15px] bg-ms-btn-green-23"
//           text="ثبت"
//         />
//     </form>
//   );
// }

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import UiButton from '@/components/UI/ui-button';
import { Checkbox, Stack, TextareaAutosize, Typography } from '@mui/material';
import FileUploader from '@/components/common/fileUploader/FileUploader';
import TransitionsModal from '@/components/common/modal/modal_center/TransitionsModal';
import Image from 'next/image';

interface IFormInputs {
  personalReasons: boolean;
  otherReason: boolean;
  description: string;
  uploader: [];
}

export default function RefundReason() {
  const [isOpenEnsureRefund, setOpenEnsureRefund] =
    React.useState<boolean>(true);
  const { handleSubmit, register, reset } = useForm<IFormInputs>({
    defaultValues: {
      personalReasons: false,
      otherReason: false,
      description: '',
      uploader: []
    }
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  const handle_confirm_Refund = () => {
      setOpenEnsureRefund(true)   
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="overflow-scroll">
      <FormControl sx={{ width: '100%' }}>
        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="0"
          name="radio-buttons-group"
          className="-mr-2"
        >
          <FormControlLabel
            className="m-0"
            {...register('personalReasons')}
            name="1"
            value="1"
            control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
            label="دلایل شخصی مسافر"
          />
          <FormControlLabel
            className="m-0"
            {...register('otherReason')}
            name="2"
            value="2"
            control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
            label="تاخیر بیش از دو ساعت"
          />
          <FormControlLabel
            className="m-0"
            {...register('otherReason')}
            name="2"
            value="3"
            control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
            label="تعجیل بیش از ۹۰ دقیقه"
          />
          <FormControlLabel
            className="m-0"
            {...register('otherReason')}
            name="2"
            value="4"
            control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
            label="ابطال پرواز از سمت ایر لاین"
          />
          <FormControlLabel
            className="m-0"
            {...register('otherReason')}
            name="2"
            value="5"
            control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
            label="ابطال به دلیل بدی آب و هوا"
          />
          <FormControlLabel
            className="m-0"
            {...register('otherReason')}
            name="2"
            value="6"
            control={<Radio sx={{ color: '#F5BB00' }} color="warning" />}
            label="ابطال پرواز رفت"
          />
        </RadioGroup>

        <Stack direction="column" spacing={2} className=" flex items-start">
          <Typography variant="body1" component={'label'} className="pt-5">
            توضیحات
          </Typography>

          <TextareaAutosize
            {...register('description')}
            placeholder="Message"
            className="w-full min-h-[100px] rounded-2xl bg-ms-back-card-gray-12 p-4 border-none outline-none"
          />
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          className=" flex items-start w-full mt-8"
        ></Stack>

        <FileUploader register={register} />

        <Stack
          direction="column"
          spacing={2}
          className=" flex items-start w-full mt-8"
        ></Stack>
        <UiButton
          onClick={handle_confirm_Refund}
          type="submit"
          className="m-6 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-[15px] bg-ms-btn-green-23"
          text="ثبت"
        />
      </FormControl>

      {isOpenEnsureRefund && (
        <div>
          <TransitionsModal
            className="rounded-2xl bg-ms-white w-[80%] h-36 flex justify-center align-middle items-center p-2"
            open={isOpenEnsureRefund}
            handleClose={() => setOpenEnsureRefund(false)}
          >
            <Image
              className="mx-2"
              src={'/static/icons/components/worn-out.png'}
              alt={'flight'}
              width={25} //automatically provided
              height={25} //automatically provide
            />

            <Typography className="text-ms-lg" component="span">
                   آیا از استرداد بلیط خود اطمینان دارید؟ 
            </Typography>
          </TransitionsModal>
        </div>
      )}
    </form>
  );
}
