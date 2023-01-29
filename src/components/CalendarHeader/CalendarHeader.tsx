import React, { useCallback } from 'react';
import { useAppDispatch } from 'redux/hooks';
import DatePicker from 'components/DatePicker/DatePicker';
import { setCurrentDate } from 'redux/calendar/calendarSlice';
import PrimaryButton from 'components/Buttons/PrimaryButton/PrimaryButton';

import PlusIcon from 'assets/PlusIcon';
import styles from './CalendarHeader.module.sass';
import { useModal } from 'components/ModalProvider/ModalProvider';

const CalendarHeader = () => {
  const dispatch = useAppDispatch();
  const { addModal } = useModal();

  const handleChange = useCallback(
    (value: Date) => {
      dispatch(setCurrentDate(value));
    },
    [dispatch]
  );

  const handleClick = useCallback(() => {
    addModal();
  }, [addModal]);

  return (
    <header className={styles.calendarHeader}>
      <PrimaryButton
        type="button"
        onClick={handleClick}
        className={styles.primaryBtn}
        content={<PlusIcon width={32} height={32} color="white" />}
      />
      <DatePicker onChange={handleChange} />
    </header>
  );
};

export default CalendarHeader;
