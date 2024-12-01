import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api/api";

// get data from api
export const getHome = createAsyncThunk(
  "home/getHome",
  async (_, { rejectWithValue }) => {
    // try{
    //     const data = await api.get('/home')
    //     return data?.data.data
    // } catch (err) {
    //     return rejectWithValue(err.response? err?.response?.data : err.message)
    // }
    return await api
      .get("/home")
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
const homeSlice = createSlice({
  name: "home",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log("data gat", action.payload);
        state.data = action.payload;
      })
      .addCase(getHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHome.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default homeSlice.reducer;
