import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import DaySpace from 'components/DaySpace/DaySpace';
import { CSSProperties } from '@mui/styled-engine';

const style = {
  display: 'flex',
  alignItems: 'center',
};

const Day = () => {
  return (
    <div style={style}>
      <Sidebar />
      <DaySpace />
    </div>
  );
};

export default Day;
