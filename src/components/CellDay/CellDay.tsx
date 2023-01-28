import React from 'react';

import styles from './CellDay.module.sass';

const CellDay = ({ id }: { id: number }) => {
  return (
    <div className={styles.cellDay}>
      <div className={styles.dayNumber}>{id}</div>
      <div className={styles.content}>No events</div>
    </div>
  );
};

export default CellDay;
