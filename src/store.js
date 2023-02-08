import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/track/trackSlice";

export const store = configureStore({
  reducer: {
    track: cartReducer,
  },
});
