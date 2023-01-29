import React, { useMemo } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import {
  selectCurrentDateDetails,
  selectEvents,
} from 'redux/calendar/calendarSelect';

import styles from './CellDay.module.sass';

const CellDay = ({ id }: { id: number }) => {
  const { month, year } = useAppSelector(selectCurrentDateDetails)!;
  const events = useAppSelector(selectEvents);
  const navigation = useNavigate();

  const eventsQuantity = useMemo(() => {
    const date = moment(`${year}-${month}=${id}`).format('DD-MM-Y');
    if (events[date]) {
      return Object.keys(events[date]).length;
    }
    return 0;
  }, [events]);

  return (
    <div className={styles.cellDay} onClick={() => navigation('/day')}>
      <div className={styles.dayNumber}>{id}</div>
      {eventsQuantity ? (
        <div className={styles.content}>You have {eventsQuantity} events</div>
      ) : (
        <div className={styles.content}>No events</div>
      )}
      <div className={styles.content}></div>
    </div>
  );
};

export default CellDay;
