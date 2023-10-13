// import omit from 'lodash/omit';
// import keyBy from 'lodash/keyBy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// utils
// import axios from '../../services/axios/api';
// @types
import { IDepartureAndReturnDate,IDepartureDate, IPassenger, Passenger } from '../../types/searchFlight';

// ----------------------------------------------------------------------

const initialState: IDepartureAndReturnDate  = {
        departure: {
          day: '',
          month_name: '',
          month_number: '',
          year: ''
        },
        return: {
          day: '',
          month_name: '',
          month_number: '',
          year: ''
        },
       fullRangeDate : "",
       day : "",
       year : "",
       month :"",
        passengers : [
            {
              ageClass: 'بزرگسالان',
              ageGrade: ' ۱۲ سال به بالا',
              count: 1
            },
            {
              ageClass: 'کودک ',
              ageGrade: '۲ تا ۱۲ سال ',
              count: 0
            },
            {
              ageClass: 'نوزاد',
              ageGrade: ' ۱۰ روز تا ۲ سال',
              count: 0
            }
       ]
       
}  

const flightSlice = createSlice({
  name: 'searchFlights',
  initialState,
  reducers: {

    twoWayDate(state:any, action: PayloadAction<IDepartureAndReturnDate>)  {
      // ["2023/10/09", "2023/10/15"]);
      state.departure = action.payload.departure;
      state.return = action.payload.return;
      state.fullRangeDate = `${action.payload.departure.year}-${action.payload.departure.month_number}-${action.payload.departure.day},${action.payload.return.year}-${action.payload.return.month_number}-${action.payload.return.day}`
      // return [...state, state]
    },

    setDepartureDate(state:any, action: PayloadAction<IDepartureDate>){
        state.day = action.payload.day;
        state.month = action.payload.month;
        state.year = action.payload.year;
    },
    
    // addPassengers(state:any, action: PayloadAction<Passenger>){

    //     const passenger = action.payload;
    //     const passengerIndex = state.passengers?.findIndex((p:any,index:number) => p.ageClass === passenger.ageClass);
    
    //     if (passengerIndex !== -1) {
    //       state.passengers[passengerIndex].count += 1;
    //     } else {
    //       state.passengers.push(passenger);
    //     }
    //   //  state.passengers = action.payload
    // },

    // subtractPassengers: (state, action : PayloadAction<Passenger>) => {
    //   const passenger = action.payload;
    //   const passengerIndex = state.passengers?.findIndex((p:any,index:number) => p.ageClass === passenger.ageClass) as number;

    //   if (passengerIndex !== -1) {
    //     if(state.passengers?.[passengerIndex]?.count > 0){

    //     }
    //     state.passengers.[passengerIndex].count -= 1;
    //   }
    // }
    

  }
});

// Reducer
export default flightSlice.reducer;

export const { twoWayDate, setDepartureDate, addPassengers,subtractPassengers } = flightSlice.actions;


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
