'use client';




import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./DateRangeCalendar.module.css"; 

import "react-datepicker/dist/react-datepicker.css";


const DateRangeCalendar = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  




  return (
    <div 
    className={styles.msCalendar} 
    >
        <DatePicker
             className="custom-datepicker" 
              selected={startDate}
              onChange={onChange}
              minDate={new Date()}
              // maxDate={addMonths(new Date(), 5)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              showDisabledMonthNavigation
            />
    </div>
   
  );
};

export default DateRangeCalendar;

