// import omit from 'lodash/omit';
// import keyBy from 'lodash/keyBy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// utils
// import axios from '../../services/axios/api';
// @types
import {
  ICity,
  ICityTrack,
  IDepartureAndReturnDate,
  IPassenger,
  Passenger
} from '../../../@types/flight/searchFlight';
import { toast } from 'sonner';

// ----------------------------------------------------------------------

const initialState: IDepartureAndReturnDate = {
  departing: '',
  returning: '',
  totalPassenger: 1,
  passengers: [
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
  city: {
    origin: '',
    originIata: '',
    originAirportEnglishName: '',
    destination: '',
    destinationIata: '',
    destinationAirportEnglishName: ''
  }
};

const flightSlice = createSlice({
  name: 'searchFlights',
  initialState,
  reducers: {
    setDate(state: any, action: PayloadAction<IDepartureAndReturnDate>) {
      return {
        ...state,
        departing: action.payload.departing,
        returning: action.payload?.returning
      };
    },

    setCity(state: any, action: PayloadAction<ICityTrack | any>) {
      switch (action.payload?.type) {
        case 'ORIGIN':
          state.city.origin = action.payload.origin;
          state.city.originIata = action.payload.originIata;
          state.city.originAirportEnglishName =
            action.payload.originAirportEnglishName;
          break;
        case 'DESTINATION':
          state.city.destination = action.payload.destination;
          state.city.destinationIata = action.payload.destinationIata;
          state.city.destinationAirportEnglishName =
            action.payload.destinationAirportEnglishName;
          break;
      }
      // return state
    },
    addPassengers(
      state: IDepartureAndReturnDate,
      action: PayloadAction<Passenger>
    ) {
      let counts: number = 0;

      state.passengers?.map((item, index) => {
        if (item.ageClass === action.payload.ageClass) {
          item.count = action.payload.count + 1;
        }
        counts += item.count;
        // return counts
      });
      state.totalPassenger = counts;
    },
    subtractPassengers(
      state: IDepartureAndReturnDate,
      action: PayloadAction<Passenger>
    ) {
      let counts: number = 0;

      // if(state.totalPassenger !== undefined && state.totalPassenger > 0){
      state.passengers?.map((item, index) => {
        if (item.ageClass === action.payload.ageClass) {
          if (item.ageClass === 'بزرگسالان') {
            if (item.count > 1) {
              item.count = action.payload.count - 1;
            } else if (item.count === 1) {
              // item.count = 1;
              toast.error('حداقل 1 نفر');
            }
          } else if (item.count > 0) {
            item.count = action.payload.count - 1;
          }
        }
        counts += item.count;
      });
      state.totalPassenger = counts;
      // }
      // else return
    }
  }
});

// Reducer
// ----------------------------------------------------------------------
export default flightSlice.reducer;
export const { setDate, setCity, addPassengers, subtractPassengers } =
  flightSlice.actions;
