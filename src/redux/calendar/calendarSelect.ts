import { RootState } from 'redux/store';

export const selectCalendar = (state: RootState) => state.calendar;
export const selectCurrentDate = (state: RootState) =>
  state.calendar.currentDate;
export const selectDateNow = (state: RootState) => state.calendar.dateNow;
export const selectEvents = (state: RootState) => state.calendar.events;
