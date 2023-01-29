import React, { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import DaySpace from 'components/DaySpace/DaySpace';
import { useAppSelector } from 'redux/hooks';
import {
  selectCurrentDateDetails,
  selectEvents,
} from 'redux/calendar/calendarSelect';
import { IEvents } from 'redux/calendar/calendar.types';
import moment from 'moment';

const style = {
  display: 'flex',
  alignItems: 'center',
};

const Day = () => {
  const currentDateDetails = useAppSelector(selectCurrentDateDetails);
  const selectedDate = moment(
    `${currentDateDetails?.year} ${currentDateDetails?.month} ${currentDateDetails?.day}`
  ).format('DD-MM-Y');
  const events = useAppSelector(selectEvents);
  const selectedDateEvents = events[selectedDate];
  const [selectedEvent, setSelectedEvent] = useState<IEvents>();

  return (
    <div style={style}>
      <Sidebar event={selectedEvent} />
      <DaySpace
        currentDateDetails={currentDateDetails}
        events={selectedDateEvents}
        setSelectedEvent={setSelectedEvent}
      />
    </div>
  );
};

export default Day;
