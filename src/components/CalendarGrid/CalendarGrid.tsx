import React from 'react';

import styles from './CalendarGrid.module.sass';

const CalendarGrid = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className={styles.calendarGrid}>{children}</div>;
};

export default CalendarGrid;
