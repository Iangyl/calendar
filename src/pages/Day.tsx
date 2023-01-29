import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import DaySpace from 'components/DaySpace/DaySpace';

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
