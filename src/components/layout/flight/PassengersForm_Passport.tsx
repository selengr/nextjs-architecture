'use client';
// opt
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UiButton from '@/components/UI/ui-button/UiButton';
import {
  CustomField,
  CustomFieldBirthDay,
  CustomFieldGender
} from './actions/PassengersFormActions';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addPassenger } from '@/redux/slices/flight/bookingProcess';
import {
  FlightBookingData,
  Passenger,
  operationType,
  passengerType
} from '@/@types/flight/bookingProcess';

const NationalCardField = ({ register, errors, edit }: any) => {
  return (
    <CustomField
      register={register}
      errors={errors}
      id="nationalCode"
      label="کد ملی"
      name="nationalCode"
      // ValidationSchema={Yup.string().required("کد ملی الزامی است.").min(10, "کد ملی باید حداقل 10 رقم داشته باشد.").max(10, "کد ملی باید حداکثر 10 رقم داشته باشد.")}
    />
  );
};
const PassportCodeField = ({ register, errors, edit }: any) => {
  return (
    <CustomField
      register={register}
      errors={errors}
      id="passport_code"
      label="شماره پاسپورت"
      name="passport_code"
      // ValidationSchema={Yup.string().required("کد ملی الزامی است.").min(10, "کد ملی باید حداقل 10 رقم داشته باشد.").max(10, "کد ملی باید حداکثر 10 رقم داشته باشد.")}
    />
  );
};
const PassportIssuingCountryField = ({ register, errors, edit }: any) => {
  return (
    <CustomField
      register={register}
      errors={errors}
      id="passport_issuing_country"
      label="کشور صادر کننده پاسپورت"
      name="passport_issuing_country"
      // ValidationSchema={Yup.string().required("کد ملی الزامی است.").min(10, "کد ملی باید حداقل 10 رقم داشته باشد.").max(10, "کد ملی باید حداکثر 10 رقم داشته باشد.")}
    />
  );
};

const LatinNameField = ({ register, errors }: any) => {
  return (
    <CustomField
      register={register}
      errors={errors}
      id="latinName"
      label="نام لاتین"
      name="latinName"
    />
  );
};

const LatinSurnameField = ({ register, errors }: any) => {
  return (
    <CustomField
      register={register}
      errors={errors}
      id="latinSurname"
      label="نام خانوادگی لاتین"
      name="latinSurname"
    />
  );
};

const DateofBirthinADCardField = ({ register, errors, ageHood }: any) => {
  return (
    <CustomFieldBirthDay
      register={register}
      errors={errors}
      ageHood={ageHood}
      placeholder="روز / ماه / سال"
      // register={register}
      id="dateOfBirth"
      label="تاریخ تولد میلادی"
      name="dateOfBirth"
    />
  );
};

const ExpiryDateOfPassportField = ({ register, errors, ageHood }: any) => {
  return (
    <CustomFieldBirthDay
      register={register}
      errors={errors}
      ageHood={ageHood}
      placeholder="روز / ماه / سال"
      // register={register}
      id="expiry_date_of_passport"
      label="تاریخ انقضا پاسپورت"
      name="expiry_date_of_passport"
    />
  );
};

const GenderFieldGender = ({ register, errors }: any) => {
  return (
    <CustomFieldGender
      register={register}
      errors={errors}
      id="gender"
      label="جنسیت"
      name="gender"
    />
  );
};
// const PhoneNumberCardField = ({ register, errors }: any) => {
//   return (
//     <CustomField
//       register={register}
//       errors={errors}
//       id="phoneNumber"
//       label="شماره تماس"
//       name="phoneNumber" />
//   );
// };

type Inputs = {
  nationalCode: string;
  // phoneNumber: string;
  latinName: string;
  latinSurname: string;
  dateOfBirth: string;
  gender: 'MR' | 'MS' | string;
};

const schema = yup.object().shape({
  nationalCode: yup
    .string()
    .required('کد ملی الزامی می باشد')
    .matches(/^\d{10}$/, 'کد ملی اشتباه می باشد'),

  gender: yup.string().required('عنوان الزامی می باشد'),
  // phoneNumber: yup
  //   .string()
  //   .required('شماره تلفن الزامی می باشد')
  //   .matches(/^\+?[0-9]{10,14}$/, 'شماره تلفن اشتباه می باشد'),
  latinName: yup
    .string()
    .required('نام لاتین الزامی می باشد')
    .matches(/^[A-Za-z\s]+$/, 'نام لاتین اشتباه می باشد'),

  latinSurname: yup
    .string()
    .required('نام خانوادگی الزامی می باشد')
    .matches(/^[A-Za-z\s]+$/, 'نام خانوادگی اشتباه می باشد'),

  dateOfBirth: yup.string().required('تاریخ تولد الزامی می باشد')
});

const PassengersForm_Passport = ({
  onClose,
  ageHood,
  id,
  edit
}: {
  onClose: () => void;
  ageHood: string;
  id: number;
  edit: Passenger;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      nationalCode: edit ? edit.iranianCartMelli.codeMelli : '',
      // phoneNumber:'',
      latinName: edit ? edit.firstName : '',
      latinSurname: edit ? edit.lastName : '',
      dateOfBirth: edit ? edit.birthDate : '',
      gender: edit ? edit.title : ''
    }
  });
  const dispatch = useAppDispatch();
  const booking = useAppSelector<FlightBookingData>((state) => state.booking);

  const onSubmit = (data: Inputs) => {
    let price: number = 0;
    let P_T: passengerType = passengerType.adult;
    if (ageHood == 'بزرگسال') {
      price =
        booking.departureSegment.adult_Fare +
        booking.returningSegment.adult_Fare;
      P_T = passengerType.adult;
    } else if (ageHood == 'کودک') {
      price =
        booking.departureSegment.child_Fare +
        booking.returningSegment.child_Fare;
      P_T = passengerType.child;
    } else if (ageHood == 'نوزاد') {
      price =
        booking.departureSegment.infant_Fare +
        booking.returningSegment.infant_Fare;
      P_T = passengerType.infant;
    }

    dispatch(
      addPassenger({
        type: operationType.UPDATE_PASSENGER,
        id,
        payable_Fare: price,
        passengerType: P_T,
        title: data.gender,
        firstName: data.latinName,
        lastName: data.latinSurname,
        birthDate: data.dateOfBirth,
        iranianCartMelli: {
          codeMelli: data.nationalCode
        },
        passport: null
      })
    );
    onClose();
  };
  console.log('errors :>> ', errors);

  return (
    <div className="">
      <div className="text-ms-crimson font-ms-bold flex flex-row justify-between p-8 pb-2">
        <h1>نفر {id + 1}</h1>
        <h1>{ageHood}</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GenderFieldGender register={register} errors={errors} edit={edit} />
        <LatinNameField register={register} errors={errors} edit={edit} />
        <LatinSurnameField register={register} errors={errors} edit={edit} />
        <NationalCardField register={register} errors={errors} edit={edit} />
        <PassportCodeField register={register} errors={errors} edit={edit} />
        <PassportIssuingCountryField
          register={register}
          errors={errors}
          edit={edit}
        />
        <DateofBirthinADCardField
          register={register}
          errors={errors}
          ageHood={ageHood}
        />
        <ExpiryDateOfPassportField
          register={register}
          errors={errors}
          ageHood={ageHood}
        />
        {/* <PhoneNumberCardField register={register} errors={errors} /> */}

        <UiButton
          // onClick={() => console.log("object")}
          type="submit"
          className="m-6 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
          text="تایید"
        />
      </form>
    </div>
  );
};

export default PassengersForm_Passport;
