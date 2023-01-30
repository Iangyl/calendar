import React, { useState } from 'react';
import { TextField, Typography, Button, Box } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import styles from './AddEventForm.module.sass';
import FormControl from '@mui/material/FormControl';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addEvent } from 'redux/calendar/calendarSlice';
import { selectCurrentDate } from 'redux/calendar/calendarSelect';

const AddEventForm = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState<Date | null>(null);

  const clearForm = () => {
    closeModal();
    setTitle('');
    setDescription('');
    setDate(currentDate);
    setTime(null);
  };
  const handleChangeDate = (value: Date | null) => {
    setDate(value!);
  };
  const handleChangeTime = (value: Date | null) => {
    setTime(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const newEvent = {
      date: date.toString(),
      time: time?.toString(),
      title,
      description,
    };
    dispatch(addEvent(newEvent));
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Typography variant="h4" component="h2">
        Add Event
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.title}
          label="Title"
          variant="standard"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label className={styles.descLabel} htmlFor="event-description">
          Description
        </label>
        <TextareaAutosize
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ fontSize: 16, height: 180 }}
          id="event-description"
          name="event-description"
          maxRows={6}
        />
      </FormControl>
      <FormControl required margin="normal" className={styles.dateContainer}>
        <DatePicker
          value={date}
          onChange={handleChangeDate}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
        <TimePicker
          value={time}
          onChange={handleChangeTime}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </FormControl>
      <Box className={styles.btnContainer}>
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button type="button" variant="outlined" onClick={() => clearForm()}>
          Close
        </Button>
      </Box>
    </form>
  );
};

export default AddEventForm;
