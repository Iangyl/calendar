import React from 'react';

import styles from './DayHeader.module.sass';

const DayHeader = ({
  dayNumber,
  dayString,
}: {
  dayNumber: number;
  dayString: string;
}) => (
  <header className={styles.dayHeader}>
    <div className={styles.dayNumber}>{dayNumber}</div>
    <div className={styles.dayString}>{dayString}</div>
  </header>
);

export default DayHeader;
