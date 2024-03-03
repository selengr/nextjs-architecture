import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
// import mailReducer from './slices/mail';
// import chatReducer from './slices/chat';
// import productReducer from './slices/product';
// import calendarReducer from './slices/calendar';
import flightSlice from './slices/flight/flights';
import booking from './slices/flight/bookingProcess';
import register from './slices/accommodation/register';

// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  }
});

export const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

export const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout']
};
export const registerPersistConfig = {
  key: 'register',
  storage
  // keyPrefix: 'redux-',
  // whitelist: ['navigation']
};

const rootReducer = combineReducers({
  //add your slices  here and blew you can see two example
  flight: flightSlice,
  booking: booking,
  register: persistReducer(registerPersistConfig, register)
  // chat: chatReducer,
  // calendar: calendarReducer,
  // kanban: kanbanReducer,
  // product: persistReducer(productPersistConfig, productReducer),
});

export default rootReducer;
