export function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function getMonthYear(date: Date) {
  return [date.getMonth() + 1, date.getFullYear()];
}
