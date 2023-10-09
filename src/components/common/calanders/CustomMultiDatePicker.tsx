"use client"



import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";

import  "./CustomMultiDatePicker.css"; 
import UiButton from "@/components/UI/ui-button";
import { toast } from "sonner";
// import "./PersianDatePicker.css";

export interface PersianDatePickerProps {
  value?: Date | Date[];
  onChange?: () => void;
  locale?: string;
  selectDateRange?: boolean;
  dateFormat?: string;
  theme?: string;
}

const PersianDatePicker: React.FC<PersianDatePickerProps> = ({
  value,
  onChange,
  locale = "en",
  selectDateRange = false,
  dateFormat = "MM/DD/YYYY",
  theme = "light",
}) => {
  const calendar = locale === "fa" ? persian : gregorian;
  const localeObj = locale === "fa" ? persian_fa : persian_en;
  // const [valuew, setValue] = useState(["2023/10/09", "2023/10/15"]);

  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);

  const handleDateRangeSelect = (value: Date | Date[]) => {
    // setValue(value);
    setIsDateRangeOpen(false);
  };

  return (
    <div className={`msCalendar PersianDatePicker ${theme}`}>

{!selectDateRange && (
      <Calendar
        calendar={calendar}
        locale={localeObj}
        value={value}
        onChange={onChange}
        minDate={new Date()}
        format={dateFormat}
      />
)}
      {/* {selectDateRange && (
        <div className="PersianDatePicker__dateRangeSelect">
          <button
            onClick={() => setIsDateRangeOpen(true)}
            className="PersianDatePicker__dateRangeSelectButton"
          >
            Select Date Range
          </button>
        </div>
      )}
       */}
      
      {selectDateRange && (
        <div className="">
          <Calendar
            calendar={calendar}
            locale={localeObj}
            value={value}
            minDate={new Date()}
            onChange={onChange}
            // selectRange={selectDateRange}
            range
            rangeHover

            // dateFormat={dateFormat}
          />
        </div>
      )}

  

    </div>
  );
};

export default PersianDatePicker;