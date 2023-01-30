export interface IEvents {
  title: string;
  description?: string;
  date: string;
  time?: string | null;
}

export interface ICurrentDateDetails {
  day: number;
  month: number;
  year: number;
  hours?: number;
  minutes?: number;
}

export interface CalendarState {
  currentDate: string;
  dateNow: string;
  currentDateDetails?: ICurrentDateDetails;
  events: Record<string, IEvents[]>;
}
