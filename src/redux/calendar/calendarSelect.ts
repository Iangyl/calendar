import { RootState } from 'redux/store';

export const selectCalendar = (state: RootState) => state;
export const selectCurrentDate = (state: RootState) =>
  new Date(state.currentDate);
export const selectDateNow = (state: RootState) => new Date(state.dateNow);
export const selectEvents = (state: RootState) => state.events;
export const selectCurrentDateDetails = (state: RootState) =>
  state.currentDateDetails;
