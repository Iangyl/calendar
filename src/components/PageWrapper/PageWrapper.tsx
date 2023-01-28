import React from 'react';

import styles from './PageWrapper.module.sass';

const PageWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
