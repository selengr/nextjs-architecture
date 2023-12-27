export interface IdataList {
  value: string;
  caption: string;
  elementStr: string;
  extMap: {
    cityName: string;
    id: number;
    airportEnglishName: string;
  };
}

export interface IAirport {
  dataList: IdataList[];
  page: number;
  rows: number;
  totalCount: number;
}

export interface ICityData {
  type: 'COMBO' | 'AUTOCOMPLETE';
  entity: 'AIRPORTS';
  mode: 'AIRPORTS';
  input: string;
  page: number;
  rows: number;
}
