import React from 'react';
import DatePicker from 'components/DatePicker/DatePicker';
import PrimaryButton from 'components/Buttons/PrimaryButton/PrimaryButton';

import PlusIcon from 'assets/PlusIcon';
import styles from './CalendarHeader.module.sass';

const CalendarHeader = () => {
  return (
    <header className={styles.calendarHeader}>
      <PrimaryButton type="button" content={<PlusIcon color="#1F2" />} />
      <DatePicker />
    </header>
  );
};

export default CalendarHeader;
