'use client';

import moment from 'jalali-moment';
import { FC, useState } from 'react';
import {
  generate_gregorian_days,
  generate_persian_days
} from './GeneratingDate';
import { ICalendarSubmit, IValueGroup } from '../types';
import Calendar_view from './Calendar_view';

let years: any[] = [],
  months: any[] = [],
  days: any[] = [];

//   external functions ===========================================

export const Version_zero_date: FC<ICalendarSubmit> = ({
  handle_submit,
  ageHood
}) => {
  const [selectedYear, setSelectedYear] = useState<string>(
    moment().locale('fa').format('jY')
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    moment().locale('fa').format('jMM')
  );

  const [selectedDay, setSelectedDay] = useState<string>(
    moment().locale('fa').format('jDD')
  );
  const [currentDate, setCurrentDate] = useState<'persian' | 'gergorian'>(
    'persian'
  );

  const [valueGroups, setValueGroups] = useState<IValueGroup>({
    years: selectedYear,
    months: selectedMonth,
    days: selectedDay
  });

  const handleChange = (name: string, value: string) => {
    // let obj = {
    //     years: setSelectedYear,
    //     months: setSelectedMonth,
    //     days: setSelectedDay,
    //   }

    //   if(obj[name]) {
    //       obj[name](value);
    //   }
    switch (name) {
      case 'years':
        setSelectedYear(value);
        break;
      case 'months':
        setSelectedMonth(value);
        break;
      case 'days':
        setSelectedDay(value);
        break;
    }

    setValueGroups((prevValueGroups) => ({
      ...prevValueGroups,
      [name]: value
    }));
  };

  // ================== change local
  const handle_change_local = () => {
    if (currentDate === 'persian') {
      setCurrentDate('gergorian');

      handleChange('years', moment().locale('en').format('YYYY'));
      handleChange('months', moment().locale('en').format('MM'));
      handleChange('days', moment().locale('en').format('D'));
    } else {
      setCurrentDate('persian');
      handleChange('years', moment().locale('fa').format('jY'));
      handleChange('months', moment().locale('fa').format('jMM'));
      handleChange('days', moment().locale('fa').format('jDD'));
    }
  };

  let len: number = 0;
  if (ageHood === 'بزرگسال') {
    len = 100;
  } else if (ageHood === 'کودک') {
    len = 9;
  } else if (ageHood === 'نوزاد') {
    len = 3;
  }
  if (currentDate === 'persian') {
    // === persian years

    years = Array.from({ length: len }, (_, i) => {
      if (ageHood === 'بزرگسال')
        return moment()
          .subtract(i + 9, 'jYear')
          .format('jYYYY');
      return moment().subtract(i, 'jYear').format('jYYYY');
    });

    // === persian months
    months = Array.from({ length: 12 }, (_, i) =>
      moment().jMonth(i).format('jMM')
    );

    // === persian days
    days = generate_persian_days(parseInt(selectedMonth));
  } else if (currentDate === 'gergorian') {
    // === predorian year
    years = Array.from({ length: len }, (_, i) =>
      moment().subtract(i, 'jYear').format('YYYY')
    );
    // === predorian year
    months = Array.from({ length: 12 }, (_, i) =>
      moment().jMonth(i).format('jMM')
    );
    // === predorian year
    days = generate_gregorian_days(parseInt(selectedMonth));
  }

  const optionGroups = {
    years: years.map((year) => ({
      label: year.toString(),
      value: year.toString()
    })),
    months: months.map((month) => ({
      label: month.toString(),
      value: month.toString()
    })),

    days: days.map((day) => ({
      label: day.toString(),
      value: day.toString()
    }))
  };

  return (
    <Calendar_view
      optionGroups={optionGroups}
      valueGroups={valueGroups}
      handleChange={handleChange}
      selectedYear={selectedYear}
      selectedMonth={selectedMonth}
      selectedDay={selectedDay}
      handle_change_local={handle_change_local}
      handle_submit={handle_submit}
    />
  );
};
