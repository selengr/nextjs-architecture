import * as moment from 'jalali-moment';

export function Gregorian_Date(date: string) {
  const gregorian = moment.from(date, 'fa', 'YYYY-MM-DD').format('YYYY-MM-DD');
  return gregorian;
}
