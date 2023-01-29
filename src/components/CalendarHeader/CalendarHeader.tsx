import React from 'react';
import DatePicker from 'components/DatePicker/DatePicker';
import PrimaryButton from 'components/Buttons/PrimaryButton/PrimaryButton';

import PlusIcon from 'assets/PlusIcon';
import styles from './CalendarHeader.module.sass';
import { useAppDispatch } from 'redux/hooks';
import { setCurrentDate } from 'redux/calendar/calendarSlice';

const CalendarHeader = () => {
  const dispatch = useAppDispatch();
  const handleChange = (value: Date) => {
    console.log(value);
    dispatch(setCurrentDate(value));
  };
  return (
    <header className={styles.calendarHeader}>
      <PrimaryButton
        type="button"
        className={styles.primaryBtn}
        content={<PlusIcon width={20} height={24} color="white" />}
      />
      <DatePicker onChange={handleChange} />
    </header>
  );
};

export default CalendarHeader;
