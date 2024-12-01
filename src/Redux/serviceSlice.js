import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api/api";

// get data from api
export const getService = createAsyncThunk(
  "service/getService",
  async (_, { rejectWithValue }) => {
    return await api
      .get("/services")
      .then((response) => {
        console.log("response", response);
        return response?.data?.data; //return el data direct
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

// create slice
const serviceSlice = createSlice({
  name: "service",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("data gat", action.payload);
        state.data = action.payload;
      })
      .addCase(getService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getService.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default serviceSlice.reducer;
