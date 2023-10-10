
export type IDepartureAndReturnDate = {
    departure: {
        day: string;
        month_name: string;
        month_number: string;
        year: string;
      };
      return: {
        day: string;
        month_name: string;
        month_number: string;
        year: string;
      };
      fullRangeDate : string
  }
   & IDepartureDate & {passengers :  IPassenger}
  

export type IDepartureDate = {
      day?: String,
      month?: String,
      year?: String
 };

 export interface IPassenger {
  ageClass: string;
  ageGrade: string;
  count: number;
}