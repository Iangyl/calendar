import React from 'react';
import IButton from '../Button.types';

import styles from './PrimaryButton.module.sass';

const PrimaryButton = ({
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
      className={`${className} ${styles.primaryButton}`}
      style={style}
      onClick={onClick}
    >
      {options?.preElement && options?.preElement}
      {content}
      {options?.sufElement && options?.sufElement}
    </button>
  );
};

export default PrimaryButton;
