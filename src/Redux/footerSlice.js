import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api/api";

// get data from api
export const getFooterData = createAsyncThunk(
  "footer/getFooterData",
  async (_, { rejectWithValue }) => {
    return await api
      .get(`/general/info`)
      .then((response) => {
        // console.log("response", response.data.data);
        return response?.data?.data; //return el data direct
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);
export const getIconsMedia = createAsyncThunk(
  "footer/getIconsMedia",
  async (_, { rejectWithValue }) => {
    return await api
      .get(`/link/media`)
      .then((response) => {
        // console.log("response", response.data.data);
        return response?.data?.data; //return el data direct
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

// create slice
const footerSlice = createSlice({
  name: "footer",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    iconsData:null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFooterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log("data gat", action.payload);
        state.data = action.payload;
      })
      .addCase(getFooterData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFooterData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getIconsMedia.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log("data gat", action.payload);
        state.iconsData = action.payload;
      })
      .addCase(getIconsMedia.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIconsMedia.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default footerSlice.reducer;
