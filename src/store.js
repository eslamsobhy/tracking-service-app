import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./features/track/trackSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    track: trackReducer,
    modal: modalReducer,
  },
});
