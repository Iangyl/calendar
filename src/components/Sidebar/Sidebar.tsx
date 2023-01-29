import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from 'components/Buttons/BackButton/BackButton';

import styles from './Sidebar.module.sass';

const Sidebar = () => {
  const navigator = useNavigate();
  return (
    <aside className={styles.sidebar}>
      <div style={{ marginBottom: 20 }}>
        <BackButton onClick={() => navigator('/')} />
      </div>
      <span>Choose Event</span>
    </aside>
  );
};

export default Sidebar;
