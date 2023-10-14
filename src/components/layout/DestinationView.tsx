"use client"
import { useCallback, useEffect, useMemo, useState } from "react";
import CustomizedOptions from "../common/customized-options/CustomizedOptions";
import callApi from "@/services/axios";
import { IAirport, IdataList } from "../common/customized-options/types";
import { setCity } from "@/redux/slices/flights";
import { dispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";

// export const dynamic = ''



const highRankAirportsData = {
  type: "COMBO",
  entity: "AIRPORTS",
  mode: "AIRPORTS",
  input: "",
  page: 0,
  rows: 150,
};

interface IProps {
  onClose: () => void  | undefined
}
export default function DestinationView({onClose}:IProps) {
  
  const [highRankAirports, setHighRankAirports] = useState<IAirport>();
  const city = useAppSelector((state) => state.flight.city);

  const getHighRankAirports = useCallback(async () => {
    const encodedData = encodeURIComponent(JSON.stringify(highRankAirportsData));
    const response: IAirport = await callApi().get(
      `/msafar/iata/high-rank-airports?customComboFilterModel=${encodedData}`
    );
    setHighRankAirports(response)
  }, []);





  useEffect(() => {
    getHighRankAirports();
  }, []);

  // const memoizedAirports = useMemo(() => {
  //   return airports?.dataList || [];
  // }, [airports]);

  const handlePath = (dataCity:IdataList) => {
     dispatch(setCity({
      type: 'DESTINATION',
      destination: dataCity.caption 
    }));
    onClose()
  }
// console.log('highRankAirports :>> ', highRankAirports);
  return (
    <div>
      <div className="mt-4">
        {/* <SearchBar /> */}
        <div className="min-h-fit">
          <CustomizedOptions onClose={onClose} type="DESTINATION"/>
        </div>

        <div className="flex justify-center align-middle flex-col mt-6">
          <span className="flex w-full text-ms-crimson font-ms-medium text-ms-sm p-2">
            شهر های پر تردد
          </span>
          {/* {highRankAirports} */}
          <ul className="flex flex-col w-full bg-ms-back-card-gray-12 rounded-2xl mb-8 overflow-scroll max-h-[500px]">
            {highRankAirports?.dataList.map((item: IdataList, key: number) => {
              return (
                <li
                  key={key}
                  className="active:bg-[#ACAEAB] flex border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]"
                  onClick={()=>handlePath(item)}
                >
                  {item.caption}
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