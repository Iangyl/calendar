/* eslint-disable react/display-name */
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import { dayInMs } from 'utils/constants';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';

import ArrowIcon from 'assets/ArrowIcon';
import CalendarIcon from 'assets/CalendarIcon';

import styles from './DatePicker.module.sass';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectCurrentDate } from 'redux/calendar/calendarSelect';
import { setCurrentDate } from 'redux/calendar/calendarSlice';

const CustomDatePicker = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);

  const handleChange = (value: Date) => {
    dispatch(setCurrentDate(value.toString()));
  };

  const incrementDate = () => {
    dispatch(
      setCurrentDate(
        new Date(Math.abs(Number(currentDate) + dayInMs)).toString()
      )
    );
  };

  const decrementDate = () => {
    dispatch(
      setCurrentDate(
        new Date(Math.abs(Number(currentDate) - dayInMs)).toString()
      )
    );
  };

  const CustomInput = forwardRef(({ onClick }: { onClick?: any }, ref: any) => (
    <button className={styles.customInput} onClick={onClick} ref={ref}>
      <CalendarIcon />
    </button>
  ));

  return (
    <div className={styles.datePicker}>
      <SecondaryButton
        type="button"
        className={styles.arrowBtn}
        onClick={() => decrementDate()}
        content={<ArrowIcon style={{ transform: 'rotate(0.5turn)' }} />}
      />
      <div className={styles.dateLabel}>{moment(currentDate).format('LL')}</div>
      <SecondaryButton
        type="button"
        className={styles.arrowBtn}
        onClick={() => incrementDate()}
        content={<ArrowIcon />}
      />
      <div style={{ width: 24, height: 24 }}>
        <DatePicker
          selected={currentDate}
          onChange={handleChange}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
