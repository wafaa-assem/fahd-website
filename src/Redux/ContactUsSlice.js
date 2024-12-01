import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api/api";

// get data from api
export const sendContact = createAsyncThunk(
  "contactUs/sendContact",
  async (payload, { rejectWithValue }) => {
    return await api
      .post("/send/contactus",payload)
      .then((response) => {
        console.log("response", response);
        return response?.data //return el data direct
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

// create slice
const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: {
    isLoading: false,
    isError: false,
    message:null
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("data gat", action.payload.message);
        state.message = action.payload.message;
      })
      .addCase(sendContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default contactUsSlice.reducer;
