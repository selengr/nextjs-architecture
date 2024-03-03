import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
// utils

// @types
import {
  AdultPassenger,
  ChildPassenger,
  DepartureSegment,
  FlightBookingData,
  InfantPassenger,
  ReturningSegment,
  Passenger,
  operationType
} from '@/@types/flight/bookingProcess';

// ----------------------------------------------------------------------

const initialState: FlightBookingData = {
  departureSegment: {
    flightNumber: '', //parent
    departureDateTime: '', //parent
    originIataCode: '', //parent
    destinationIataCode: '', //parent
    fareName: '', //child
    lockId: null,

    arrivalDateTime: '',
    originFarsiName: '',
    destinationFarsiName: '',

    adult_Fare: 0,
    child_Fare: 0,
    infant_Fare: 0
  },
  returningSegment: {
    flightNumber: '',
    departureDateTime: '',
    originIataCode: '',
    destinationIataCode: '',
    fareName: '',
    lockId: null,

    arrivalDateTime: '',
    originFarsiName: '',
    destinationFarsiName: '',

    adult_Fare: 0,
    child_Fare: 0,
    infant_Fare: 0
  },
  passenger: [],
  adultPassengers: [],
  childPassengers: [],
  infantPassengers: [],
  mobileNumber: '',
  email: '',
  totalPayable: 0
  // yourLocalInventoryPnr: ''
};

const booking = createSlice({
  name: 'booking_process',
  initialState,
  reducers: {
    // DEPARTURE SEGMENT
    departureSegment(
      state: FlightBookingData,
      action: PayloadAction<DepartureSegment>
    ) {
      return {
        ...state,
        departureSegment: action.payload
      };
    },

    // RETURN SEGMENT
    returningSegment(
      state: FlightBookingData,
      action: PayloadAction<ReturningSegment>
    ) {
      return {
        ...state,
        returningSegment: action.payload
      };
    },

    // ADULT PASSENGER
    addPassenger(
      state: FlightBookingData,
      action: PayloadAction<Passenger | any>
    ) {
      const { id } = action.payload;
      //  ==========================================================initiate
      if (action.payload.type === operationType.INITIATE_PASSENGER) {
        return {
          ...state,
          passenger: action.payload.payload
        };
      }
      //  ==========================================================update
      if (action.payload.type === operationType.UPDATE_PASSENGER) {
        state.passenger.map((item, index) => {
          if (index === id) {
            state.passenger[index] = action.payload;
          }
        });
      }
      //  ==========================================================delete
      if (action.payload.type === operationType.DELETE_PASSENGER) {
        const newPassenger = state.passenger.filter(
          (item, index) => index !== action.payload.id
        );
        state.passenger = newPassenger;
      }
      //  ==========================================================add new passenger
      if (action.payload.type === operationType.ADD_PASSENGER) {
        state.passenger.push(...action.payload.payload);
      }
      return state;
    },

    // ADULT PASSENGER
    adultPassenger(
      state: FlightBookingData,
      action: PayloadAction<AdultPassenger[]>
    ) {
      return {
        ...state,
        adultPassengers: action.payload
      };
    },

    // CHILD PASSENGER
    childPassenger(
      state: FlightBookingData,
      action: PayloadAction<ChildPassenger[]>
    ) {
      return {
        ...state,
        childPassengers: action.payload
      };
    },

    // INFANT PASSENGER
    infantPassenger(
      state: FlightBookingData,
      action: PayloadAction<InfantPassenger[]>
    ) {
      return {
        ...state,
        infantPassengers: action.payload
      };
    }
  }
});

// Reducer
// ----------------------------------------------------------------------
export default booking.reducer;
export const {
  departureSegment,
  returningSegment,
  adultPassenger,
  childPassenger,
  infantPassenger,
  addPassenger
} = booking.actions;
