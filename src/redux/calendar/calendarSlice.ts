import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { CalendarState, IEvents } from './calendar.types';

const initialState: CalendarState = {
  dateNow: new Date(),
  currentDate: new Date(),
  events: {},
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<IEvents>) => {
      state.events = {
        ...state.events,
        [moment(action.payload.date).format('DD-MM-Y')]: action.payload,
      };
    },
    setCurrentDate: (state, action: PayloadAction<Date>) => {
      state.currentDate = action.payload;
    },
  },
});

export const { addEvent, setCurrentDate } = calendarSlice.actions;

export default calendarSlice.reducer;
