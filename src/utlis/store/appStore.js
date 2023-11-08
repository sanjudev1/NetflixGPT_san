import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../slices/userSlice';
import movieSliceReducer from '../slices/movieSlice';
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movie: movieSliceReducer,
  },
});
export default appStore;
