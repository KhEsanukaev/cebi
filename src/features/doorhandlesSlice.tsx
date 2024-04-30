import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  doorhandles: [],
  error: null,
};

export const fetchDoorhandles: any = createAsyncThunk("fetch/Doorhandles", async (_, thunkAPI) => {
  try {
    const res = await fetch("https://app.cebisanoy.ru/doorhandle", {
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
      .addCase(fetchDoorhandles.rejected, (state: any, action) => {
        state.error = action.payload;
      })

  },
});

export default doorhandlesSlice.reducer;

