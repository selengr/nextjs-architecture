
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
   & IDepartureDate &  IPassenger
  

export type IDepartureDate = {
      day?: String,
      month?: String,
      year?: String
 };

 export type IPassenger = {
  passengers? : [{
  ageClass: string;
  ageGrade: string;
  count: number
 }]
}