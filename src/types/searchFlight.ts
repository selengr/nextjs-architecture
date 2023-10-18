
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
      fullRangeDate : string,
      totalPassenger? : number 
  }
   & IDepartureDate &  IPassenger & ICity
  

export type IDepartureDate = {
      day?: string,
      month?: string,
      year?: string
      fullYear?: string
      month_number?: string
 };

 export type IPassenger = {
  passengers? : [
    {
      ageClass: 'بزرگسالان',
      ageGrade: ' ۱۲ سال به بالا',
      count: number,
 },
    {
      ageClass: 'کودک ',
      ageGrade: '۲ تا ۱۲ سال ',
    count: number
 },
    {
      ageClass: 'نوزاد',
      ageGrade: ' ۱۰ روز تا ۲ سال',
      count: number
    },
],
}

export type  Passenger = {
  ageClass: string;
  ageGrade: string;
  count: number;
}
export type  ICity = {
  city? :{
    origin? :string,
    originAirportEnglishName: string,
    destination? :string
    destinationAirportEnglishName : string,
   }
}


export type ICityTrack = {
  origin: string,
  originAirportEnglishName: string,
  destination : string,
  destinationAirportEnglishName: string,
}

export interface ISearchFlightsData {
  originIataCode: string | undefined;
  destinationIataCode: string | undefined;
  departureDate: string;
  returningDate?: string | null;
  fetchSupplierWebserviceFlights: boolean;
  fetchFlighsWithBookingPolicy: boolean;
  language: string;
}