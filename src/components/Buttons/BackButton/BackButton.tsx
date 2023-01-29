import React, { useState } from 'react';
import FairyArrowIcon from 'assets/FairyArrowIcon';

import styles from './BackButton.module.sass';

const BackButton = ({
  onClick,
}: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`${styles.backbutton} ${
        isHovered ? styles['hover'] : styles['common']
      }`}
      type="button"
      onClick={onClick}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <FairyArrowIcon
        width={16}
        height={16}
        fill={isHovered ? '#fff' : '#0088ff'}
      />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
