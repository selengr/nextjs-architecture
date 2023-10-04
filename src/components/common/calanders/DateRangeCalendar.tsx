'use client';




import React, { useState } from "react";
import DatePicker from "react-datepicker";
import  "./DateRangeCalendar.css"; 
import "./../../../app/globals.css"
import "react-datepicker/dist/react-datepicker.css";


const DateRangeCalendar = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  React.useEffect(()=>{
     console.log('dooooooooo1 :>> ', document.querySelector(".react-datepicker "))
     console.log('dooooooooo2 :>> ', document.querySelector(".ay--keyboard-selected  "))
     console.log('dooooooooo3 :>> ', document.querySelector(".day--range-end"))
     console.log('dooooooooo4 :>> ', document.querySelector(".react-datepicker .day--in-range"))
  },[])




  return (
    <div 
    className={"msCalendar"} 
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

