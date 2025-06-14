import {createSlice} from '@reduxjs/toolkit';

const experiencedSlice = createSlice({
  name: 'experienced',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
})

export const experiencedActions = experiencedSlice.actions;
export default experiencedSlice;