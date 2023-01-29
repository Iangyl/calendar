import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IEvents } from 'redux/calendar/calendar.types';
import BackButton from 'components/Buttons/BackButton/BackButton';

import styles from './Sidebar.module.sass';
import moment from 'moment';

const Sidebar = ({ event }: { event: IEvents | undefined }) => {
  const navigator = useNavigate();
  console.log(event);
  return (
    <aside className={styles.sidebar}>
      <div style={{ marginBottom: 20 }}>
        <BackButton onClick={() => navigator('/')} />
      </div>
      {event ? (
        <div className={styles.eventInfo}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <div className={styles.timeContainer}>
            <p className={styles.date}>
              {moment(event.date).format('DD-MM-Y')}
            </p>
            <p className={styles.time}>
              {event.time ? moment(event.time).format('hh:mm') : 'All day'}
            </p>
          </div>
        </div>
      ) : (
        <span>Choose Event</span>
      )}
    </aside>
  );
};

export default Sidebar;
