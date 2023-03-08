import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import movieReducer from './movieSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
});
