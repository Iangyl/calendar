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

const CustomDatePicker = ({ onChange }: { onChange?: any }) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);

  const handleChange = (value: Date) => {
    dispatch(setCurrentDate(value));
    onChange(value);
  };

  const incrementDate = () => {
    dispatch(setCurrentDate(new Date(Math.abs(Number(currentDate) + dayInMs))));
  };

  const decrementDate = () => {
    dispatch(setCurrentDate(new Date(Math.abs(Number(currentDate) - dayInMs))));
  };

  useEffect(() => {
    onChange(currentDate);
  }, [currentDate]);

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
