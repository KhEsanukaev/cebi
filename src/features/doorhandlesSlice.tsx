import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { builders } from "prettier/doc.js";

const initialState = {
  doorhandles: [],
  error: null,
};

export const fetchDoorhandles = createAsyncThunk("fetch/Doorhandles", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/doorhandle", {
      method: "GET",
    });
   console.log('GET');
   
    const doorhandles = await res.json();

    if (doorhandles.error) {
      return thunkAPI.rejectWithValue(doorhandles.error);
    }

    return doorhandles;
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});

const doorhandlesSlice = createSlice({
  name: "doorhandles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoorhandles.fulfilled, (state, action) => {
        state.doorhandles = action.payload;
      })
      .addCase(fetchDoorhandles.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(fetchDoorhandles.pending, (state, action) => {
        
      });
  },
});

export default doorhandlesSlice.reducer;