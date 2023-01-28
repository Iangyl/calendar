import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Day from 'pages/Day';
import Calendar from 'pages/Calendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/day" element={<Day />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
