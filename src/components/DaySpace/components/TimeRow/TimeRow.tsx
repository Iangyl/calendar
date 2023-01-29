import React from 'react';

import styles from './TimeRow.module.sass';

const TimeRow = ({ time, title }: { time: string; title: string }) => {
  return (
    <div className={styles.timeRow}>
      <span>{time}</span>
      <span>{title}</span>
    </div>
  );
};

export default TimeRow;
