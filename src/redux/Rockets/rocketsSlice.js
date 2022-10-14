import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const recRockets = createAsyncThunk('rockets/recRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsList = await response.json();
  return rocketsList;
});
const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(recRockets.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
export { actions, recRockets };
export default reducer;
