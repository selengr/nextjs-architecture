// import omit from 'lodash/omit';
// import keyBy from 'lodash/keyBy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// utils
// import axios from '../../services/axios/api';
// @types
import { ICity, ICityTrack, IDepartureAndReturnDate,IDepartureDate, IPassenger, Passenger } from '../../types/searchFlight';

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
       ],
       city :{
        origin :"",
        destination :""
       }
      
       
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
    

    setCity(state:any, action: PayloadAction<ICityTrack>) {
      // console.log('action.type :>> ', action);
      switch (action.payload?.type) {
        case 'ORIGIN':
          state.city.origin = action.payload.origin;
          break;
          case 'DESTINATION':
            state.city.destination = action.payload.destination;
          break;
      }
      // return state 
    },
    addPassengers(state:IDepartureAndReturnDate, action : PayloadAction<Passenger>){
      state.passengers?.map((item,index)=>{
        if(item.ageClass === action.payload.ageClass){
          item.count = action.payload.count +1;
        }

        // action.payload
      })
    },
    subtractPassengers(state:IDepartureAndReturnDate, action : PayloadAction<Passenger>){
      state.passengers?.map((item,index)=>{
        if(item.ageClass === action.payload.ageClass){
          item.count = action.payload.count -1;
        }

        // action.payload
      })
    }
  }
});

// Reducer
export default flightSlice.reducer;

export const { twoWayDate, setDepartureDate,setCity, addPassengers,subtractPassengers 
  } = flightSlice.actions;


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
