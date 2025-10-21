import {createSlice} from '@reduxjs/toolkit';

const fetchDevStatusSlice = createSlice({
  name: 'fetchDeveloperStatus',
  initialState: {
    fetchDone: false,       
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  }
})

export const fetchDevStatusActions = fetchDevStatusSlice.actions
export default fetchDevStatusSlice;