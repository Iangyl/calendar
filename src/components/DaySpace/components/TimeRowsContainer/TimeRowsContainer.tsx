import React from 'react';

import styles from './TimeRowsContainer.module.sass';

const TimeRowsContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default TimeRowsContainer;
