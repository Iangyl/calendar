import React from 'react';

import styles from './TimeRow.module.sass';

const TimeRow = ({
  time,
  title,
  onClick,
}: {
  time: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => {
  return (
    <div className={styles.timeRow} onClick={onClick}>
      <span>{time}</span>
      <span>{title}</span>
    </div>
  );
};

export default TimeRow;
