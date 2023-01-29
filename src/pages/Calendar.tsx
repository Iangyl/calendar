import React from 'react';
import CellDay from 'components/CellDay/CellDay';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import CalendarGrid from 'components/CalendarGrid/CalendarGrid';
import CalendarHeader from 'components/CalendarHeader/CalendarHeader';
import { selectCurrentDate } from 'redux/calendar/calendarSelect';
import { daysInMonth, getMonthYear } from 'utils/helpers';
import { useAppSelector } from 'redux/hooks';

const Calendar = () => {
  const currentDate = useAppSelector(selectCurrentDate);
  const [month, year] = getMonthYear(currentDate);
  const days = Array.from(
    { length: daysInMonth(month, year) },
    (_, i) => i + 1
  );
  return (
    <PageWrapper>
      <CalendarHeader />
      <CalendarGrid>
        {days.map((item: number) => (
          <CellDay key={item} id={item} />
        ))}
      </CalendarGrid>
    </PageWrapper>
  );
};

export default Calendar;
