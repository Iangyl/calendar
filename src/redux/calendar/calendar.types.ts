export interface IEvents {
  title: string;
  description?: string;
  date: Date;
  time?: Date | null;
}

export interface ICurrentDateDetails {
  day: number;
  month: number;
  year: number;
  hours?: number;
  minutes?: number;
}

export interface CalendarState {
  currentDate: Date;
  dateNow: Date;
  currentDateDetails?: ICurrentDateDetails;
  events: Record<string, IEvents[]>;
}
