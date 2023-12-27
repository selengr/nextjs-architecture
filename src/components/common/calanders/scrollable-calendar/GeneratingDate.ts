import moment from 'jalali-moment';

//   external functions ===========================================
function createNumberArray(number: number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    result.push(i);
  }
  return result;
}

// ===================persian= get date count in persian month
export const generate_persian_days = (month: number) => {
  let result = createNumberArray(getDaysInPersianMonth(month));
  return result;
};
// ===================english= get date count in persian month
export const generate_gregorian_days = (month: number) => {
  let result = createNumberArray(getDaysInGregorianMonth(month));
  return result;
};
// ===================persian= get date count in persian month from moment
const getDaysInPersianMonth = (month: number) => {
  const currentDate = moment().jMonth(month - 1); // Set the month using the provided month number
  const daysInMonth = currentDate.jDaysInMonth(); // Get the number of days in the month
  return daysInMonth;
};
// ===================english= get date count in persian month from moment
const getDaysInGregorianMonth = (month: number) => {
  const currentDate = moment().month(month - 1); // Set the month using the provided month number
  const daysInMonth = currentDate.daysInMonth(); // Get the number of days in the month
  return daysInMonth;
};
