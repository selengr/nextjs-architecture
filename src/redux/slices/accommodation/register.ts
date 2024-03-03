import keyBy from 'lodash/keyBy';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import callApi from '@/services/axios';
// utils

// @types
// import { IChatState } from '../../types/chat';

// ----------------------------------------------------------------------

const initialState: any = {
  //   isLoading: false,
  //   error: null,
  //   contacts: { byId: {}, allIds: [] },
  //   conversations: { byId: {}, allIds: [] },
  //   activeConversationId: null,
  //   participants: [],
  //   recipients: []
  residenceType: '',
  residenceName: '',
  residenceArea: '',
  accommodationImages: [],
  accommodationDetails: {
    nameOfResidence: '',
    totalArea: undefined,
    aboutTheResidence: '',
    descriptionOfAccommodation: '',
    commonFacilities: '',
    moreTips: '',

    roomName: '',
    roomSize: 0,
    floor: 0,
    stairs: 0,
    suitableForTheElderly: false,
    details: {
      basicRoomCapacity: 0,
      maximumRoomCapacity: 0,
      numberOfRooms: 0,
      numberOfSingleBeds: 0,
      numberOfDoublesBeds: 0,
      numberOfTraditionalBeds: 0
    },
    bathroom_inroom: 0,
    squatToilet_inroom: 0,
    sittingToilet_inroom: 0,
    facilitiesOptions: []
  }
  // dorbastAccommodationDetails : {
  //   nameOfResidence: '',
  //   totalArea: undefined,
  //   aboutTheResidence: '',
  //   descriptionOfAccommodation: '',
  //   commonFacilities: '',
  //   moreTips: ''
  // }
};

const slice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    // START LOADING
    // startLoading(state) {
    //   state.isLoading = true;
    // },

    // // HAS ERROR
    // hasError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    //SAVE ACCOMMODATION DETAILS
    saveAccommodationDetails(state, action) {
      const { name, value } = action.payload;
      state.accommodationDetails = {
        ...state.accommodationDetails,
        [name]: value
      };
    },

    //UPDATE ACCOMMODATION DETAILS
    updateAccommodationDetails(state, action) {
      state.accommodationDetails = {
        ...state.accommodationDetails,
        accommodationDetails: action.payload
      };
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { saveAccommodationDetails, updateAccommodationDetails } =
  slice.actions;

// ----------------------------------------------------------------------
