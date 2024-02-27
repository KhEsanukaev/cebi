import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  categories: [],
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/categories", {
        method: "GET",
      });

      const categories = await res.json();

      if (categories.error) {
        return thunkAPI.rejectWithValue(categories.error);
      }

      return categories;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchCategories.pending, (state, action) => {
      });
  },
});

export default categoriesSlice.reducer;
