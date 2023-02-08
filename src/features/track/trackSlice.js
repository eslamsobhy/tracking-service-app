import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isDropDownOpen: false,
  shipment: {},
  isLoading: true,
  isArabic: false,
  isError: false,
  shipmentNum: "",
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

export const { openDropDown, closeDropDown, updateShipmentNum } =
  trackSlice.actions;
export default trackSlice.reducer;
