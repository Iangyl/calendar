export interface IEvents {
  title: string;
  description?: string;
  date: Date;
  time?: Date | null;
}

export interface CalendarState {
  currentDate: Date;
  dateNow: Date;
  events: Record<string, Record<string, IEvents>>;
}
