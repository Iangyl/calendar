import React, { Dispatch } from 'react';
import TimeRow from './components/TimeRow/TimeRow';
import DayHeader from './components/DayHeader/DayHeader';
import TimeRowsContainer from './components/TimeRowsContainer/TimeRowsContainer';
import { ICurrentDateDetails, IEvents } from 'redux/calendar/calendar.types';

import styles from './DaySpace.module.sass';
import moment from 'moment';

const DaySpace = ({
  currentDateDetails,
  events,
  setSelectedEvent,
}: {
  events: IEvents[] | undefined;
  currentDateDetails: ICurrentDateDetails | undefined;
  setSelectedEvent: Dispatch<IEvents>;
}) => {
  const { day, month, year } = currentDateDetails!;
  const dayString = moment(`${year}-${month}-${day}`).format('dddd');
  const handleClick = (event: IEvents) => {
    setSelectedEvent(event);
  };
  return (
    <section className={styles.daySpace}>
      <DayHeader dayNumber={day} dayString={dayString} />
      <TimeRowsContainer>
        {events ? (
          events.map((event, id) => (
            <TimeRow
              key={id}
              time={event.time ? moment(event.time).format('hh:mm') : 'All day'}
              title={event.title}
              onClick={() => handleClick(event)}
            />
          ))
        ) : (
          <></>
        )}
      </TimeRowsContainer>
    </section>
  );
};

export default DaySpace;
