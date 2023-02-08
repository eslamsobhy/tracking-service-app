import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropDownOpen: false,
  shipment: { error: "Invalid tracking number!", status: "Not Found" },
  isLoading: true,
  isArabic: false,
  location: {},
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    openDropDown: (state, coordinates) => {
      state.isDropDownOpen = true;
      state.location = coordinates;
    },
    closeDropDown: (state) => {
      state.isDropDownOpen = false;
    },
    // changeLang: (state) => {
    //   state.isArabic = true;
    // },
  },
});

console.log(trackSlice);

export const { openDropDown, closeDropDown } = trackSlice.actions;
export default trackSlice.reducer;
