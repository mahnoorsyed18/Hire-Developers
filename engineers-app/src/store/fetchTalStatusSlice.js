import {createSlice} from '@reduxjs/toolkit';

const fetchTalStatusSlice = createSlice({
  name: 'fetchTalentsStatus',
  initialState: {
    fetchDone: false,       // false: PENDING, and true: DONE
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

export const fetchTalStatusActions = fetchTalStatusSlice.actions
export default fetchTalStatusSlice;