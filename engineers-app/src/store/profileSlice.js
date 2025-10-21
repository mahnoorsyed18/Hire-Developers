import { createSlice } from "@reduxjs/toolkit";

const localStorageId = localStorage.getItem("selectedEngineerId");

const initialState = {
  engineers: [],
  selectedEngineerId: localStorageId || null, 
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    showProfile: (state, action) => {
      state.selectedEngineerId = action.payload;
      localStorage.setItem("selectedEngineerId", action.payload);
    },
    setEngineers: (state, action) => {
      state.engineers = action.payload;
    },
  },
});

export const profileSliceActions = profileSlice.actions;
export default profileSlice;
