// import omit from 'lodash/omit';
// import keyBy from 'lodash/keyBy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// utils
// import axios from '../../services/axios/api';
// @types
import { ICity, ICityTrack, IDepartureAndReturnDate,IDepartureDate, IPassenger, Passenger } from '../../types/searchFlight';
import { toast } from 'sonner';

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
       totalPassenger : 1, 
        passengers : [
            {
              ageClass: 'بزرگسالان',
              ageGrade: ' ۱۲ سال به بالا',
              count: 1,
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
        originAirportEnglishName :"",
        destination :"",
        destinationAirportEnglishName :""
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
      state.fullRangeDate = `${action.payload.departure.year}-${action.payload.departure.month_number}-${action.payload.departure.day},${action.payload.return.year}-${action.payload.return.month_number}-${action.payload.return.day}`;
      state.year = "";
      state.day = "";
      state.month = ""
      state.fullYear = ""
      state.month_name = ""
      // return [...state, state]
    },

    // setDepartureDate(state:any, action: PayloadAction<IDepartureDate>){
    //     state.day = action.payload.day;
    //     state.month = action.payload.month;
    //     state.year = action.payload.year;
    //     state.fullYear = action.payload.fullYear;
    //     state.month_number = action.payload.month_number;
    //     state.fullRangeDate = "";
    //     state.departure.day = "";
    //     state.departure.month_name = "";
    //     state.departure.month_number = "";
    //     state.departure.year = "";
    //     state.return.day = "";
    //     state.return.month_name = "";
    //     state.return.month_number = "";
    //     state.return.year = ""
    // },
    setDepartureDate(state: any, action: PayloadAction<IDepartureDate>)  {
      return {
        ...state,
        day: action.payload.day,
        month: action.payload.month,
        year: action.payload.year,
        fullYear: action.payload.fullYear,
        month_number: action.payload.month_number,
        fullRangeDate: "",
        departure: {
          // ...state.departure,
          day: "",
          month_name: "",
          month_number: "",
          year: "",
        },
        return: {
          // ...state.departure,
          day: "",
          month_name: "",
          month_number: "",
          year: "",
        }
      }
    },
    

    setCity(state:any, action: PayloadAction<ICityTrack>) {
      // console.log('action.type :>> ', action);
      switch (action.payload?.type) {
        case 'ORIGIN':
          state.city.origin = action.payload.origin;
          state.city.originAirportEnglishName = action.payload.originAirportEnglishName;
          break;
          case 'DESTINATION':
            state.city.destination = action.payload.destination;
            state.city.destinationAirportEnglishName = action.payload.destinationAirportEnglishName;
          break;
      }
      // return state 
    },
    addPassengers(state:IDepartureAndReturnDate, action : PayloadAction<Passenger>){

      let counts : number = 0

        state.passengers?.map((item,index)=>{
          if(item.ageClass === action.payload.ageClass){
            item.count = action.payload.count +1;
          }
          counts += item.count;
          // return counts
        })
        state.totalPassenger = counts
        
    },
    subtractPassengers(state:IDepartureAndReturnDate, action : PayloadAction<Passenger>){
      let counts : number = 0
    
      // if(state.totalPassenger !== undefined && state.totalPassenger > 0){
      state.passengers?.map((item,index)=>{
              if(item.ageClass === action.payload.ageClass){
                if(item.ageClass === 'بزرگسالان') {
                  if(item.count > 1){
                    item.count = action.payload.count -1;
                  } else if(item.count === 1){
                    // item.count = 1;
                    toast.error('حداقل 1 نفر')
                  }
             }else if(item.count > 0) {
                item.count = action.payload.count -1;
             }
            }
            counts += item.count;       
      })
      state.totalPassenger = counts
      // }
      // else return
    }
  }
});

// Reducer
export default flightSlice.reducer;

export const { twoWayDate, setDepartureDate,setCity, addPassengers,subtractPassengers 
  } = flightSlice.actions;


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
