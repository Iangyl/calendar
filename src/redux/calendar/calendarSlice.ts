import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { CalendarState, IEvents } from './calendar.types';

const initialState: CalendarState = {
  dateNow: new Date().toString(),
  currentDate: new Date().toString(),
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
      const dateOfEvent = moment(new Date(action.payload.date)).format(
        'DD-MM-Y'
      );
      if (state.events[dateOfEvent]) {
        state.events[dateOfEvent] = [
          ...state.events[dateOfEvent],
          action.payload,
        ];
      } else {
        state.events[dateOfEvent] = [action.payload];
      }
    },
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload;
      const newDate = new Date(action.payload);
      state.currentDateDetails = {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear(),
        hours: newDate.getHours(),
        minutes: newDate.getMinutes(),
      };
    },
  },
});

export const { addEvent, setCurrentDate } = calendarSlice.actions;

export default calendarSlice.reducer;
