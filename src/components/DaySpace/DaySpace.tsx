import React from 'react';
import TimeRow from './components/TimeRow/TimeRow';
import DayHeader from './components/DayHeader/DayHeader';
import TimeRowsContainer from './components/TimeRowsContainer/TimeRowsContainer';

import styles from './DaySpace.module.sass';

const DaySpace = () => {
  return (
    <section className={styles.daySpace}>
      <DayHeader dayNumber={31} dayString={'Tuesday'} />
      <TimeRowsContainer>
        <TimeRow time="13:01" title="Do diploma project" />
      </TimeRowsContainer>
    </section>
  );
};

export default DaySpace;
