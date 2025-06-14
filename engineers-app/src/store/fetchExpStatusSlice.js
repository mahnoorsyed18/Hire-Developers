import {createSlice} from '@reduxjs/toolkit';

const fetchExpStatusSlice = createSlice({
  name: 'fetchExperiencedStatus',
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

export const fetchExpStatusActions = fetchExpStatusSlice.actions
export default fetchExpStatusSlice;