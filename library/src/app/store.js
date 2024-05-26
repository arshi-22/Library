import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/slice/bookslice";

export const Store = configureStore({
  reducer: bookSlice,
});
