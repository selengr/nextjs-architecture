'use client';

import '../CustomMultiDatePicker.css';
import { ICalendarProps } from '../types';
import UiButton from '@/components/UI/ui-button/UiButton';
// import Picker from 'react-scrollable-picker';

// export const dynamic = 'dynamic';

const Calendar_view = ({
  optionGroups,
  valueGroups,
  handleChange,
  selectedYear,
  selectedMonth,
  selectedDay,
  handle_submit,
  handle_change_local
}: ICalendarProps) => {
  const change_lacal = () => {
    handle_change_local();
    let fonts = document.querySelector('.calendar_view > .picker-container');
    let first = document.querySelector('.calendar_view .first');
    let second = document.querySelector('.calendar_view .second');
    let third = document.querySelector('.calendar_view .third');
    let local_mood = document.querySelector('.calendar_main .local_mood');

    // fonts.forEach((font) => {
    if (fonts?.classList.contains('gregorian')) {
      fonts.classList.remove('gregorian');
      if (first) {
        first.textContent = 'روز';
        second!.textContent = 'ماه';
        third!.textContent = 'سال';
        local_mood!.textContent = 'تبدیل تاریخ به میلادی';
      }

      // fonts.classList.remove("gregorian");
    } else {
      fonts?.classList.add('gregorian');
      first!.textContent = 'day';
      second!.textContent = 'month';
      third!.textContent = 'year';
      local_mood!.textContent = 'تبدیل تاریخ به شمسی';
    }
    // });
  };

  const submit_btn = () => {
    handle_submit(selectedYear, selectedMonth, selectedDay);
  };

  return (
    <div className="calendar_main">
      <div className="calendar_view">
        <div className="flex flex-row w-full justify-center align-middle items-center text-center text-ms-thick-green px-4">
          <span className="third w-1/3">سال</span>
          <span className="second w-1/3">ماه</span>
          <span className="first w-1/3">روز</span>
        </div>
        {/* <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={handleChange}
          height={200}
        /> */}
      </div>

      {/* <label>
          {selectedYear}-{selectedMonth}-{selectedDay}
        </label> */}

      <div className="flex flex-row justify-center align-middle mb-[32px] mt-6 w-full">
        <div className="w-1/2 m-2">
          <UiButton
            onClick={change_lacal}
            className="bg-transparent border-ms-border-green-33 p-4 border-solid border-2 text-ms-lg h-[40px] text-ms-white rounded-xl w-full"
            text=""
          >
            <div className="flex flex-row">
              <span className="local_mood text-ms-green text-ms-sm p-2 py-4">
                تبدیل تاریخ به میلادی
              </span>
            </div>
          </UiButton>
        </div>

        <div className="w-1/2 m-2">
          <UiButton
            onClick={submit_btn}
            className=" hover:bg-ms-btn-green-33 text-ms-lg h-[40px] p-4 justify-center flex-1 w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-2xl"
            text="انتخاب"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar_view;
