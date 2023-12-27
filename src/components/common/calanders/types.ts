export type ICalendarProps = {
  optionGroups: {
    years: OptionGroup[];
    months: OptionGroup[];
    days: OptionGroup[];
  };
  valueGroups: {
    years: string;
    months: string;
    days: string;
  };
  handleChange: any;
  selectedYear: string;
  selectedMonth: string;
  selectedDay: string;
  handle_change_local: () => void;
} & ICalendarSubmit;

export interface IValueGroup {
  years: string;
  months: string;
  days: string;
}

interface OptionGroup {
  label: string;
  value: string;
}

export interface ICalendarSubmit {
  handle_submit: (
    selectedYear: string,
    selectedMonth: string,
    selectedDay: string
  ) => void;
  ageHood?: 'بزرگسال' | 'کودک' | 'نوزاد' | any;
}
