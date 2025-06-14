import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      return state.filter(engineerId => engineerId !== action.payload)
    },
    clearFavorite: () => {
      return []; 
    },
  }
})

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;