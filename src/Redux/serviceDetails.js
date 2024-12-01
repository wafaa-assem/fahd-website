import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api/api";

// get data from api
export const getServiceDetails = createAsyncThunk(
  "serviceDetails/getServiceDetails",
  async (id, { rejectWithValue }) => {
    return await api
      .get(`/services/details/${id}`)
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
const serviceDetailsSlice = createSlice({
  name: "serviceDetails",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServiceDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log("data gat", action.payload);
        state.data = action.payload;
      })
      .addCase(getServiceDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServiceDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default serviceDetailsSlice.reducer;
