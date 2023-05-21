import { configureStore } from "@reduxjs/toolkit";
import inputReducer from '../features/inputSlice';

const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export  { store };
