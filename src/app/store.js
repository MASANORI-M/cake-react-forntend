import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import urlSlice from '../features/url/urlSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    url: urlSlice,
  },
});
