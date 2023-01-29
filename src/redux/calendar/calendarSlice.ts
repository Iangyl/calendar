import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { CalendarState, IEvents } from './calendar.types';

const initialState: CalendarState = {
  dateNow: new Date(),
  currentDate: new Date(),
  currentDateDetails: {
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
  events: {},
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<IEvents>) => {
      const dateOfEvent = moment(action.payload.date).format('DD-MM-Y');
      if (state.events[dateOfEvent]) {
        state.events[dateOfEvent] = [
          ...state.events[dateOfEvent],
          action.payload,
        ];
      }
      state.events[dateOfEvent] = [action.payload];
    },
    setCurrentDate: (state, action: PayloadAction<Date>) => {
      state.currentDate = action.payload;
      state.currentDateDetails = {
        day: action.payload.getDate(),
        month: action.payload.getMonth() + 1,
        year: action.payload.getFullYear(),
        hours: action.payload.getHours(),
        minutes: action.payload.getMinutes(),
      };
    },
  },
});

export const { addEvent, setCurrentDate } = calendarSlice.actions;

export default calendarSlice.reducer;
