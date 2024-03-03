import { SubmitHandler } from 'react-hook-form';

export interface IResidenceType {
  residence?: 'dorbast' | 'shared' | null;
  picType?: string;
}

export interface IFormInputs {
  personalReasons: boolean;
  otherReason: boolean;
}

// export interface IList {
//   text: string;
//   images: string;
//   en_name: string;
// }
export interface IListOfRecidences {
  text: string;
  images: string;
  en_name: string;
  enum: string;
}

export enum EnumOfRecidences {
  RESIDENTIAL_COMPLEX = 'residential_complex',
  GUESTHOUSE = 'guesthouse',
  ECOTOURISM = 'ecotourism',
  APARTMENT = 'apartment',
  COTTAGE = 'cottage',
  VILLA = 'villa',
  SUITE = 'suite',
  MOTEL = 'motel',
  HOTEL = 'hotel',
  HOME = 'home',
  INN = 'inn'
}
export interface IListOfArea {
  text: string;
  images: string;
  enum: string;
}

export enum EnumOfArea {
  MOUNTAINOUS = 'mountainous',
  COASTAL = 'coastal',
  DESERT = 'desert',
  WOODSY = 'woodsy',
  URBAN = 'urban',
  RURAL = 'rural'
}
export enum EnumOfRecidenceType {
  MULTIPLE_UNITS = 'multiple_units',
  UNSHARED = 'unshared',
  SHARED = 'shared'
}

export type InputsCharacteristicsResidence = {
  nameOfResidence: string;
  totalArea: number;
  aboutTheResidence: string;
  descriptionOfAccommodation?: string;
  commonFacilities?: string;
  moreTips?: string;
};

export interface IListOfWellFare {
  text: string;
  images: string;
  enum: string;
}

export enum EnumOfWellFare {
  PHONE = 'phone',
  KITCHEN = 'kitchen',
  AIR_CONDITIONONG = 'air_conditioning',
  HAIR_DRYER = 'hair_dryer',
  SQUAT_ROOM = 'squat_room',
  SITTING_ROOM = 'sitting_room',
  TV = 'tv',
  SAFE_BOX = 'safe_box',
  REFRIGERATOR = 'refrigerator',
  WATER = 'Water',
  FURNITURE = 'Furniture',
  DISHWASHER = 'dishwasher',
  MICROWAVE = 'microwave',
  COFFEE_MAKER = 'coffee_maker'
}

export interface IPageProps {
  params: { area: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
