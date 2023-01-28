import React from 'react';
import IButton from '../Button.types';

import styles from './SecondaryButton.module.sass';

const SecondaryButton = ({
  type,
  content = 'Button',
  options,
  className,
  style,
  onClick,
}: IButton) => {
  return (
    <button
      type={type}
      className={`${className} ${styles.secondaryButton}`}
      style={style}
      onClick={onClick}
    >
      {options?.preElement && options?.preElement}
      {content}
      {options?.sufElement && options?.sufElement}
    </button>
  );
};

export default SecondaryButton;
