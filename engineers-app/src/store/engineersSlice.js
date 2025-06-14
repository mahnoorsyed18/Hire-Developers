import {createSlice} from '@reduxjs/toolkit';

const engineersSlice = createSlice({
  name: 'engineers',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
})

export const engineersActions = engineersSlice.actions;
export default engineersSlice;