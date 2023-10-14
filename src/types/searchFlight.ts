
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
   & IDepartureDate &  IPassenger & ICity
  

export type IDepartureDate = {
      day?: String,
      month?: String,
      year?: String
 };

 export type IPassenger = {
  passengers? : [
    {
      ageClass: 'بزرگسالان',
      ageGrade: ' ۱۲ سال به بالا',
      count: number
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
]
}

export type  Passenger = {
  ageClass: string;
  ageGrade: string;
  count: number;
}
export type  ICity = {
  city? :{
    origin? :string,
    destination? :string
   }
}


export type ICityTrack = {
  origin: string,
  destination : string
}