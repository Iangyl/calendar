import React from 'react';
import CellDay from 'components/CellDay/CellDay';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import CalendarGrid from 'components/CalendarGrid/CalendarGrid';
import CalendarHeader from 'components/CalendarHeader/CalendarHeader';

const Calendar = () => {
  const mock = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <PageWrapper>
      <CalendarHeader />
      <CalendarGrid>
        {mock.map((item: number) => (
          <CellDay key={item} id={item} />
        ))}
      </CalendarGrid>
    </PageWrapper>
  );
};

export default Calendar;
