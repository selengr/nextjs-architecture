import callApi from '@/services/axios';
import { dispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/hook';
import { setCity } from '@/redux/slices/flight/flights';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { IAirport, IdataList } from '../common/customized-options/types';
import CustomizedOptions from '../common/customized-options/CustomizedOptions';
import { Skeleton } from '@mui/material';
import { SkeletonMap } from '../common/skeleton';
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

function OriginVeiw({ onClose }: IProps) {
  const [highRankAirports, steHighRankAirports] = useState<any>();
  // const [highRankAirports,steHighRankAirports] =  useState<IAirport>();
  const [loading, setLoading] = useState<boolean>(true);
  const city = useAppSelector((state) => state.flight.city);

  const handlePath = (dataCity: IdataList) => {
    dispatch(
      setCity({
        type: 'ORIGIN',
        origin: dataCity.caption,
        originAirportEnglishName: dataCity?.extMap.airportEnglishName
      })
    );
    onClose();
  };

  const getCity = async (val: string | null) => {
    try {
      const encodedData = encodeURIComponent(
        JSON.stringify(highRankAirportsData)
      );
      // const response : IAirport =  callApi().get(
      const response: any = await callApi().get(
        `/msafar/iata/high-rank-airports?customComboFilterModel=${encodedData}`
      );
      steHighRankAirports(response);
      setLoading(false);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCity(null);
  }, []);

  return (
    <div>
      <div className="mt-4">
        {/* <SearchBar /> */}
        <div className="min-h-fit">
          <CustomizedOptions type="ORIGIN" onClose={onClose} />
        </div>

        <div className="flex justify-center align-middle flex-col mt-6">
          <span className="flex w-full text-ms-crimson font-ms-medium text-ms-sm p-2">
            شهر های پر تردد
          </span>
          {/* {highRankAirports} */}
          <ul className="m-2 p-4 pt-0 flex flex-col w-[95%] bg-ms-back-card-gray-12 rounded-2xl mb-8 overflow-y-scroll h-fit max-h-[250px]">
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

export default OriginVeiw;

// ----------------------------------------------------------------------

// NOTE:
// partial pre-rendering ...

// ----------------------------------------------------------------------

// async function getData() {
//   const encodedData = encodeURIComponent(JSON.stringify(highRankAirportsData));
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
//         type: 'ORIGIN',
//         origin: dataCity.caption,
//         originAirportEnglishName: dataCity?.extMap.airportEnglishName
//       })
//     );
//     onClose();
//   };

//   return (
//     <>
//       {highRankAirports?.dataList.map((item: IdataList, key: number) => {
//         return (
//           <li
//             key={key}
//             className="active:bg-[#ACAEAB] flex border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]"
//             onClick={() => handlePath(item)}
//           >
//             {item.caption} ({item.extMap.cityName.trim()})
//           </li>
//         );
//       })}
//     </>
//   );
// };
