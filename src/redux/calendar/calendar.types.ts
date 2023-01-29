export interface IEvents {
  title: string;
  description?: string;
  date: Date;
  time?: number;
}

export interface CalendarState {
  currentDate: Date;
  dateNow: Date;
  events: Record<string, IEvents>;
}
