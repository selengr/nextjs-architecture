export type IDepartureAndReturnDate = {
  departing: number | string;
  returning?: number | string;
  totalPassenger?: number;
} & IPassenger &
  ICity;

export type IPassenger = {
  passengers?: [
    {
      ageClass: 'بزرگسالان';
      ageGrade: ' ۱۲ سال به بالا';
      count: number;
    },
    {
      ageClass: 'کودک ';
      ageGrade: '۲ تا ۱۲ سال ';
      count: number;
    },
    {
      ageClass: 'نوزاد';
      ageGrade: ' ۱۰ روز تا ۲ سال';
      count: number;
    }
  ];
};

export type Passenger = {
  ageClass: string;
  ageGrade: string;
  count: number;
};

export type ICity = {
  city?: {
    origin?: string;
    originIata?: string;
    originAirportEnglishName: string;
    destination?: string;
    destinationIata?: string;
    destinationAirportEnglishName: string;
  };
};

export type ICityTrack = {
  origin: string;
  originIata: string;
  originAirportEnglishName: string;
  destination: string;
  destinationIata: string;
  destinationAirportEnglishName: string;
};

export interface ISearchFlightsData {
  originIataCode: string | undefined;
  destinationIataCode: string | undefined;
  departureDate: string;
  returningDate?: string | null;
  fetchSupplierWebserviceFlights: boolean;
  fetchFlighsWithBookingPolicy: boolean;
  language: string;
}

export interface ISearchFlightsUrl {
  params: { city: string };
  searchParams: {
    departing: string;
    returning: string;
    adult: string;
    child: string;
    infant: string;
  };
}

export interface ISearchFlightsApi {
  params: { city: string };
  searchParams: {
    departing: string;
    returning?: string;
  };
}
