import {configureStore} from '@reduxjs/toolkit';
import engineersSlice from './engineersSlice';
import favoritesSlice from './favoritesSlice'; 
import talentsSlice from './talentsSlice';
import experiencedSlice from './experiencedSlice';
import profileSlice from './profileSlice';
import fetchDevStatusSlice from './fetchDevStatusSlice';
import fetchExpStatusSlice from './fetchExpStatusSlice';
import fetchTalStatusSlice from './fetchTalStatusSlice';

const engineersStore = configureStore({
  reducer: {
    engineers: engineersSlice.reducer,
    fetchDeveloperStatus: fetchDevStatusSlice.reducer,
    favorites: favoritesSlice.reducer,
    talents: talentsSlice.reducer,
    fetchTalentsStatus: fetchTalStatusSlice.reducer,
    experienced: experiencedSlice.reducer,
    fetchExperiencedStatus: fetchExpStatusSlice.reducer,
    profile: profileSlice.reducer,
  }
})

export default engineersStore;