export interface IPropsCardFlight {
  data: IDataProps | any;
  departing: string;
  returning: string | undefined;
  adult: string;
  child: string;
  infant: string;
  city: string;
}
export interface IPreviewBooking {
  flightClass: FlightClass;
  flight: Flight;
  adult: number;
  child: number;
  infant: number;
  setOpenBooking: any;
}

export interface IDataProps {
  currencyCode: 'IRR' | string;
  originFarsi: string;
  destinationFarsi: string;
  charterFlightList: Flight[];
  webserviceFlightList: Flight[];
}
export interface Flight {
  flightNumber: string;
  departureDateTime: string;
  origin: {
    code: string;
    farsiName: string;
    terminal: string;
  };
  destination: {
    code: string;
    farsiName: string;
    terminal: string;
  };
  aircraft: string;
  arrivalDateTime: string;
  duration: number;
  airline: string;
  supplierId?: number;
  remarks?: string;
  isAirlineScheduleFlight?: boolean;
  stop1: string;
  stop2: string;
  flightClassList: FlightClass[];
}

export interface FlightClass {
  cabinType: string;
  bookingCode: string;
  fareName: string;
  availableSeat: number;
  adultFare?: {
    baseFare: number;
    tax: number;
    totalFare: number;
    commision: number;
    payable: number;
  };
  childFare?: {
    baseFare: number;
    tax: number;
    totalFare: number;
    commision: number;
    payable: number;
  };
  infantFare?: {
    baseFare: number;
    tax: number;
    totalFare: number;
    commision: number;
    payable: number;
  };
  onewayFare?: {
    adult_Fare: {
      baseFare: number;
      totalTax: number;
      totalFare: number;
      commision: number;
      markup: number;
      payable: number;
    };
    child_Fare: {
      baseFare: number;
      totalTax: number;
      totalFare: number;
      commision: number;
      markup: number;
      payable: number;
    };
    infant_Fare: {
      baseFare: number;
      totalTax: number;
      totalFare: number;
      commision: number;
      markup: number;
      payable: number;
    };
  };
  roundtripFare_FromOrigin?: number;
  roundtripFare_FromDestination?: number;
  adultFreeBaggage: {
    checkedBaggageQuantity: number;
    checkedBaggageTotalWeight: number;
    handBaggageQuantity: number;
    handBaggageTotalWeight: number;
  };
  childFreeBaggage: {
    checkedBaggageQuantity: number;
    checkedBaggageTotalWeight: number;
    handBaggageQuantity: number;
    handBaggageTotalWeight: number;
  };
  infantFreeBaggage: {
    checkedBaggageQuantity: number;
    checkedBaggageTotalWeight: number;
    handBaggageQuantity: number;
    handBaggageTotalWeight: number;
  };
  cancelationPolicy: string;
  bookingPolicy: string;
  flightType: string;
}

// --------------------------------------------
export interface DepartureSegment {
  flightNumber: string;
  departureDateTime: string;
  originIataCode: string;
  destinationIataCode: string;
  fareName: string;
  lockId?: null;

  arrivalDateTime: string;
  originFarsiName: string;
  destinationFarsiName: string;

  adult_Fare: number;
  child_Fare: number;
  infant_Fare: number;
}

export interface ReturningSegment {
  flightNumber: string;
  departureDateTime: string;
  originIataCode: string;
  destinationIataCode: string;
  fareName: string;
  lockId?: null;

  arrivalDateTime: string;
  originFarsiName: string;
  destinationFarsiName: string;

  adult_Fare: number;
  child_Fare: number;
  infant_Fare: number;
}

export enum passengerType {
  adult = 'بزرگسال',
  child = 'کودک',
  infant = 'نوزاد'
}
export enum PassengerType {
  adult = 'بزرگسال',
  child = 'کودک',
  infant = 'نوزاد'
}
export enum operationType {
  INITIATE_PASSENGER = 'INITIATE_PASSENGER',
  UPDATE_PASSENGER = 'UPDATE_PASSENGER',
  ADD_PASSENGER = 'ADD_PASSENGER',
  EDITE_PASSENGER = 'EDITE_PASSENGER',
  DELETE_PASSENGER = 'DELETE_PASSENGER'
}
export interface Passenger {
  payable_Fare: number;
  id: number | string;
  passengerType:
    | PassengerType.adult
    | PassengerType.child
    | PassengerType.infant;
  title: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  iranianCartMelli: {
    codeMelli: string;
  };
  passport: {
    number: string;
    expiryDate: string;
    nationalityCountryCode: string;
    placeOfIssueCountryCode: string;
  } | null;
}
export interface AdultPassenger {
  title: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  iranianCartMelli: {
    codeMelli: string;
  };
  passport: {
    number: string;
    expiryDate: string;
    nationalityCountryCode: string;
    placeOfIssueCountryCode: string;
  } | null;
}

export interface ChildPassenger {
  title: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  iranianCartMelli: {
    codeMelli: string;
  } | null;
  passport: {
    number: string;
    expiryDate: string;
    nationalityCountryCode: string;
    placeOfIssueCountryCode: string;
  } | null;
}

export interface InfantPassenger {
  title: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  iranianCartMelli: {
    codeMelli: string;
  } | null;
  passport: {
    number: string;
    expiryDate: string;
    nationalityCountryCode: string;
    placeOfIssueCountryCode: string;
  } | null;
}

export interface FlightBookingData {
  departureSegment: DepartureSegment;
  returningSegment: ReturningSegment;
  passenger: Passenger[];
  adultPassengers: AdultPassenger[];
  childPassengers: ChildPassenger[];
  infantPassengers: InfantPassenger[];
  mobileNumber: string;
  email: string;
  totalPayable: number | string;
  // yourLocalInventoryPnr: string;
}
