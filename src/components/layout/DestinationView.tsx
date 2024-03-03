import { Suspense, useEffect, useState } from 'react';
import callApi from '@/services/axios';
import { dispatch } from '@/redux/store';
import { SkeletonMap } from '../common/skeleton';
import { setCity } from '@/redux/slices/flight/flights';
import { IAirport, IdataList } from '../common/customized-options/types';
import CustomizedOptions from '../common/customized-options/CustomizedOptions';
import ReactLoading from 'react-loading';
// export const dynamic = ''

const highRankAirportsData = {
  type: 'COMBO',
  entity: 'AIRPORTS',
  mode: 'AIRPORTS',
  input: '',
  page: 0,
  rows: 150
};

interface IProps {
  onClose: () => void | undefined;
}
export default function DestinationView({ onClose }: IProps) {
  const [highRankAirports, steHighRankAirports] = useState<IAirport>();
  const [loading, setLoading] = useState<boolean>(true);

  const getCity = async (val: string | null) => {
    const encodedData = encodeURIComponent(
      JSON.stringify(highRankAirportsData)
    );
    const response: IAirport = await callApi().get(
      `/msafar/iata/high-rank-airports?customComboFilterModel=${encodedData}`
    );
    steHighRankAirports(response);
    setLoading(false);
  };

  useEffect(() => {
    getCity(null);
  }, []);

  const handlePath = (dataCity: IdataList) => {
    dispatch(
      setCity({
        type: 'DESTINATION',
        destination: dataCity.caption,
        destinationIata: dataCity.value,
        destinationAirportEnglishName: dataCity?.extMap.airportEnglishName
      })
    );
    onClose();
  };

  return (
    <div>
      <div className="mt-4">
        {/* <SearchBar /> */}
        <div className="min-h-fit">
          <CustomizedOptions onClose={onClose} type="DESTINATION" />
        </div>

        <div className="flex justify-center align-middle flex-col mt-6">
          <span className="flex w-full text-ms-crimson font-ms-medium text-ms-sm p-2">
            شهر های پر تردد
          </span>
          {/* {highRankAirports} */}
          <ul className="flex flex-col p-4 pt-0 w-full bg-ms-back-card-gray-12 rounded-2xl mb-8 overflow-scroll  h-fit max-h-[250px]">
            {loading && (
              <ReactLoading
                className="bg-ms-back-card-gray-12 p-2 pt-4"
                type={'spinningBubbles'}
                color={'#03693A'}
                height={50}
                width={50}
              />
            )}
            {highRankAirports?.dataList?.map((item: IdataList, key: number) => {
              return (
                <li
                  key={key}
                  className="active:bg-[#ACAEAB] flex border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]"
                  onClick={() => handlePath(item)}
                >
                  {item.caption} ({item.extMap.cityName.trim()})
                </li>
              );
            })}

            <div className="h-50px" />
          </ul>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

// NOTE:
// partial pre-rendering ...

// ----------------------------------------------------------------------

// async function getData() {
//   const encodedData = encodeURIComponent(
//     JSON.stringify(highRankAirportsData)
//   );
//   const response: IAirport = await callApi().get(
//     `/msafar/iata/high-rank-airports?customComboFilterModel=${encodedData}`
//   );
//   return response;
// }

// const CityDetails = async ({onClose}:IProps) => {
//   const highRankAirports = await getData();

//   const handlePath = (dataCity: IdataList) => {
//     dispatch(
//       setCity({
//         type: 'DESTINATION',
//         destination: dataCity.caption,
//         destinationIata: dataCity.value,
//         destinationAirportEnglishName: dataCity?.extMap.airportEnglishName
//       })
//     );
//     onClose();
//   };

//   return (
//     <>
//       {highRankAirports?.dataList.map((item: IdataList, key: number) => {
//               return (
//                 <li
//                   key={key}
//                   className="active:bg-[#ACAEAB] flex border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]"
//                   onClick={() => handlePath(item)}
//                 >
//                   {item.caption} ({item.extMap.cityName.trim()})
//                 </li>
//               );
//             })}
//     </>
//   );
// };
