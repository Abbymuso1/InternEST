import { format, getTime, formatDistanceToNow } from 'date-fns';

export function fDate(date: string | number | Date, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fTime(date: string | number | Date, newFormat?: string): string {
  const fm = newFormat || 'p';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: string | number | Date, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: string | number | Date) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: string | number | Date): string {
  return date
    ? formatDistanceToNow(new Date(date), {
      addSuffix: true,
    })
    : '';
}

export function isBetween(inputDate: string | number | Date, startDate: string | number | Date, endDate: string | number | Date): boolean {
  const date = new Date(inputDate);

  const results =
    new Date(date.toDateString()) >= new Date(startDate.toString()) &&
    new Date(date.toDateString()) <= new Date(endDate.toString());

  return results;
}

export function isAfter(startDate: string | number | Date, endDate: string | number | Date): boolean {
  const results =
    startDate && endDate ? new Date(startDate).getTime() > new Date(endDate).getTime() : false;

  return results;
}