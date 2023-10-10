// import omit from 'lodash/omit';
// import keyBy from 'lodash/keyBy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// utils
// import axios from '../../services/axios/api';
// @types
import { IDepartureAndReturnDate,IDepartureDate, IPassenger } from '../../types/searchFlight';

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
       passengers : [{
        ageClass: "",
        ageGrade: "",
        count: 1
       }]
       
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
    
    addPassengers(state:any, action: PayloadAction<IPassenger>){
        state.passengers = action.payload
    }
    

  }
});

// Reducer
export default flightSlice.reducer;

export const { twoWayDate, setDepartureDate, addPassengers } = flightSlice.actions;


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
