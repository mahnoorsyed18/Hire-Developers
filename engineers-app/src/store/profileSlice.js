import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  engineers: [],
  selectedEngineerId: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    showProfile: (state, action) => {
      state.selectedEngineerId = action.payload;
    },
    setEngineers: (state, action) => {
      state.engineers = action.payload;
    }
  }
})

export const profileSliceActions = profileSlice.actions;

export default profileSlice;