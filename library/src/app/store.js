import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/slice/bookslice";

export const Store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
