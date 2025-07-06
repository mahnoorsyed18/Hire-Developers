import { createSlice } from "@reduxjs/toolkit";

// Get the selected engineer ID from localStorage directly (no parsing)
const localStorageId = localStorage.getItem("selectedEngineerId");

const initialState = {
  engineers: [],
  selectedEngineerId: localStorageId || null, // just use it as a string
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    showProfile: (state, action) => {
      state.selectedEngineerId = action.payload;
      // Save the ID directly (string) to localStorage
      localStorage.setItem("selectedEngineerId", action.payload);
    },
    setEngineers: (state, action) => {
      state.engineers = action.payload;
    },
  },
});

export const profileSliceActions = profileSlice.actions;
export default profileSlice;
