'use client';

import { useState } from 'react';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import { Version_zero_date } from '@/components/common/calanders/scrollable-calendar/ScrollableCalendar';

// export const dynamic = 'dynamic';

interface FieldProps {
  placeholder?: string;
  id: any;
  label: any;
  name: any;
  register: any;
  errors: any;
  styleClass? : string
}

// ========================================================input component
export const CustomField: React.FC<FieldProps> = ({
  id,
  label,
  name,
  placeholder,
  register,
  errors,
  styleClass
}) => {
  return (
    <div className="flex flex-col m-4 my-6">
      <label className="text-ms-thick-green text-ms-lg" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        {...register(name, { required: true })}
        placeholder={placeholder}
        className={`${styleClass} ${
          errors[name] && 'is-invalid border-ms-crimson border-[1px]'
        } h-14 text-ms-lg px-6 rounded-2xl my-2 focus:outline-[#06AB5F] focus:outline-[1px] mb-0`}
      />
      {errors[name] && errors[name].type && (
        <p className="text-ms-crimson pr-2">{errors[name].message}</p>
      )}
    </div>
  );
};

// ========================================================birth day component
export const CustomFieldBirthDay: React.FC<
  FieldProps & { ageHood: string }
> = ({ id, label, name, placeholder, register, errors, ageHood }) => {
  const [value, setValue] = useState('');
  const [isOpenCBirthDay, setOpenCBirthDay] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // ================== pass data local
  const handle_submit = (
    selectedYear: string,
    selectedMonth: string,
    selectedDay: string
  ) => {
    const formattedDate = `${selectedYear}/${selectedMonth}/${selectedDay}`;
    setValue(formattedDate); 
    setOpenCBirthDay(false);
  };

  return (
    <div className="flex flex-col m-4 my-6">
      <label className="text-ms-thick-green text-ms-lg" htmlFor={id}>
        {label}
      </label>
      <div onClick={() => setOpenCBirthDay(true)} className="w-full">
        <input
          id={id}
          content={value}
          {...register(name, { required: true})}
          placeholder={placeholder}
          value={value}
          defaultValue={value}
          className={`form-control ${
            errors[name] && 'is-invalid border-ms-crimson border-[1px] -z-50'
          } h-14 text-ms-lg px-6 rounded-2xl my-2 focus:outline-[#06AB5F] focus:outline-[1px] mb-0 w-full`}
        />
        {errors[name] && (
          <p className="text-ms-crimson pr-2">{errors[name].message}</p>
        )}
      </div>

      {isOpenCBirthDay && (
        <div>
          <ModalGestures
            title={''}
            isOpen={isOpenCBirthDay}
            onClose={() => setOpenCBirthDay(false)}
            className={'overflow-scroll'}
            initialSnap={2}
          >
            <Version_zero_date
              handle_submit={handle_submit}
              ageHood={ageHood}
            />
          </ModalGestures>
        </div>
      )}
    </div>
  );
};

// ========================================================gender component
export const CustomFieldGender: React.FC<FieldProps> = ({
  id,
  label,
  name,
  placeholder,
  register,
  errors
}) => {
  return (
    <div className="flex flex-col m-4 my-6">
      <label className="text-ms-thick-green text-ms-lg" htmlFor={id}>
        {label}
      </label>

      <select
        {...register(name, { required: true })}
        id={id}
        className={`${
          errors[name] &&
          'is-invalid bg-ms-white border-ms-crimson border-[1px]'
        } h-14 text-ms-lg px-6 rounded-2xl my-2 focus:outline-[#06AB5F]  focus:outline-[1px] active:outline-[#06AB5F]  active:outline-[1px] mb-0`}
      >
        <option
          className="p-4 font-ms-iranSansMobile m-2 text-ms-lg h-10 space-x-2 space-y-20"
          value="MS"
        >
          خانم
        </option>
        <option
          className="p-4 font-ms-iranSansMobile m-2 text-ms-lg h-10"
          value="MR"
        >
          آقا
        </option>
      </select>
      {errors[name] && errors[name].type && (
        <p className="text-ms-crimson pr-2">{errors[name].message}</p>
      )}
    </div>
  );
};
