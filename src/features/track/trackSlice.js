import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isDropDownOpen: false,
  shipment: {},
  isLoading: true,
  isArabic: false,
  isError: false,
  shipmentNum: "",
  isBlank: true,
  location: {},
};

export const getData = createAsyncThunk("track/getData", (shipmentNumnber) => {
  const url = `https://tracking.bosta.co/shipments/track/${shipmentNumnber}`;
  return fetch(url)
    .then(async (resp) => {
      const data = await resp.json();
      return data;
    })
    .catch((err) => console.log(err));
});

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
    updateShipmentNum: (state, number) => {
      state.shipmentNum = number;
    },
    returnHome: (state) => {
      state.isBlank = true;
    },
    leaveHome: (state) => {
      state.isBlank = false;
    },
    // changeLang: (state) => {
    //   state.isArabic = true;
    // },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shipment = action.payload;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  openDropDown,
  closeDropDown,
  updateShipmentNum,
  returnHome,
  leaveHome,
} = trackSlice.actions;
export default trackSlice.reducer;
