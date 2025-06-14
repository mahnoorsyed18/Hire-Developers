import {createSlice} from '@reduxjs/toolkit';

const talentsSlice = createSlice({
  name: 'talents',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
})

export const talentsActions = talentsSlice.actions;
export default talentsSlice;