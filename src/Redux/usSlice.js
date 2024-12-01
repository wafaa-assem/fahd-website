import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api/api";

// get data from api
export const getUs = createAsyncThunk(
  "us/getUs",
  async (_, { rejectWithValue }) => {
    return await api
      .get("/Aboutus")
      .then((response) => {
        // console.log("response", response);
        return response?.data?.data; //return el data direct
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

// create slice
const usSlice = createSlice({
  name: "us",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log("data gat", action.payload);
        state.data = action.payload;
      })
      .addCase(getUs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default usSlice.reducer;
