"use client"
import { useCallback, useEffect, useMemo, useState } from "react";
import CustomizedOptions from "../common/customized-options/CustomizedOptions";
import callApi from "@/services/axios";

// export const dynamic = ''
type dataList = {
  value: string;
  caption: string;
  elementStr: string;
  extMap: {
    cityName: string;
    id: number;
    airportEnglishName: string;
  };
};

type Airport = {
  dataList: dataList[];
  page: number;
  rows: number;
  totalCount: number;
};

const highRankAirportsData = {
  type: "COMBO",
  entity: "AIRPORTS",
  mode: "AIRPORTS",
  input: "",
  page: 0,
  rows: 50,
};
interface CityData {
  type: "COMBO";
  entity: "AIRPORTS";
  mode: "AIRPORTS";
  input: string;
  page: number;
  rows: number;
}
const cityData : CityData = {"type": "COMBO","entity": "AIRPORTS","mode":"AIRPORTS","input": "","page": 0,"rows": 50}

export default function OriginVeiw() {
  const [highRankAirports, setHighRankAirports] = useState<any>();
  const [airports, setAirports] = useState<Airport>();
  const [origin, setOrigin] = useState();
  const [value, setValue] = useState<string|any>();

  const getHighRankAirports = useCallback(async () => {
    const encodedData = encodeURIComponent(JSON.stringify(highRankAirportsData));
    const response: Airport = await callApi().get(
      `/msafar/iata/high-rank-airports?customComboFilterModel=${encodedData}`
    );
    setHighRankAirports(response)
    // setAirports(response);
  }, []);

  
  const getCity = useCallback(async () => {
    const encodedData = encodeURIComponent(JSON.stringify(cityData));
    const response: Airport = await callApi().get(
      `/msafar/iata/custom-combo?customComboFilterModel=${encodedData}`
    );
    setAirports(response);
  }, []);




  useEffect(() => {
    getHighRankAirports();
    getCity();
  }, []);

  const memoizedAirports = useMemo(() => {
    return airports?.dataList || [];
  }, [airports]);

  const handleOrigin = (item:any) => {
    console.log('item :>> ', item.caption);
    setOrigin(item.caption)
  }
// console.log('highRankAirports :>> ', highRankAirports);
  return (
    <div>
      <div className="mt-4">
        {/* <SearchBar /> */}
        <div className="min-h-fit">
          <CustomizedOptions
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>

        <div className="flex justify-center align-middle flex-col mt-6">
          <span className="flex w-full text-ms-crimson font-ms-medium text-ms-sm p-2">
            شهر های پر تردد
          </span>
          {highRankAirports}
          {origin}
          <ul className="flex flex-col w-full bg-ms-back-card-gray-12 rounded-2xl mb-8 overflow-scroll max-h-[500px]">
            {memoizedAirports.map((item: dataList, key: number) => {
              return (
                <li
                  key={key}
                  className="flex border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]"
                  onClick={()=>handleOrigin(item)}
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