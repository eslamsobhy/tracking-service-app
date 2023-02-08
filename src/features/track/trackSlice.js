import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropDownOpen: false,
  shipment: { error: "Invalid tracking number!", status: "Not Found" },
  isLoading: true,
  isArabic: false,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
});

console.log(trackSlice);

export default trackSlice.reducer;
