import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/track/trackSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    track: cartReducer,
    modal: modalReducer,
  },
});
