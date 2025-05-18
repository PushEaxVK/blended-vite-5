import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const getCurrency = createAsyncThunk('currency/get', async (body, thunkAPI) => {
//   try {
//     const response = await fetchData(body, thunkAPI);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

const initialState = { baseCurrency: '' };

const slice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
});

export const { setBaseCurrency } = slice.actions;

export default slice.reducer;
