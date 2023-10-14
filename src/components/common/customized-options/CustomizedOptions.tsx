import React, { useEffect, useState } from 'react';
// import { styled } from '@emotion/styled';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './CustomizedOptions.module.css';
import { IAirport, ICityData, IdataList } from './types';
import callApi from '@/services/axios';
import { dispatch } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setCity } from '@/redux/slices/flights';
import { ICity } from '@/types/searchFlight';

interface SearchBarProps {
   onClose: () => void  | undefined
   type: "DESTINATION"|"ORIGIN"
}

const cityData: ICityData = {
  type: 'COMBO',
  entity: 'AIRPORTS',
  mode: 'AIRPORTS',
  input: '',
  page: 0,
  rows: 150
};


const CustomizedOptions: React.FC<SearchBarProps> = ({type,onClose}) => {
  const [airports, setAirports] = useState<IAirport>();
  const [searchCity, setSearchCity] = useState<string>('');

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.flight.city);

  const getCity = async (val: string | null) => {
    if (val) {
      cityData.input = val;
      cityData.type = 'AUTOCOMPLETE';
    }
    const encodedData = encodeURIComponent(JSON.stringify(cityData));
    const response: IAirport = await callApi().get(
      `/msafar/iata/custom-combo?customComboFilterModel=${encodedData}`
    );
    setAirports(response);
  };

  useEffect(() => {
    getCity(null);
  }, []);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(event.target.value);
    await getCity(event.target.value);
  };

  const handlePath = (city: IdataList) => {
    if (type === "DESTINATION") {
      dispatch(setCity({
        type,
        destination: city.caption 
      }));
    } else if(type === "ORIGIN") {
      dispatch(setCity({
        type,
        origin : city.caption,
      }));
    }   
    onClose()
  };

  console.log('city :>> ', city)

  return (
    <div className={styles.msCustomizedOptions}>
      <TextField
        color="success"
        className="w-full z-10 text-yellow font-ms-iranSansMobile rounded-2xl"
        id="search-bar"
        // label="جستجو"
        placeholder="جستجو"
        value={searchCity}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              className="text-ms-crimson font-ms-iranSansMobile"
            >
              <IconButton>
                <SearchIcon className="text-ms-green" />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <ul
        className="flex z-0 -mt-4 flex-col w-full bg-ms-back-card-gray-12 rounded-2xl overflow-scroll"
        style={{
          // position: 'absolute',
          // top: '40px',
          // left: '0',
          width: '100%',
          padding: '10px',
          borderRadius: '0px 0px 15px 15px',
          listStyle: 'none',
          maxHeight: '205px',
          minHeight: 0,
          height: 'fitContent'
        }}
      >
        {/* {suggestions.length>0&&
           <span className='text-ms-crimson pt-6 pb-4 pr-6 font-ms-medium text-ms-sm  border-b-solid  border-b-[#EDEDED] border-b-[1px]'>جستجو قبل</span>
       }  */}
        {airports?.dataList.map((suggestion, index) => (
          <li
            onClick={()=>handlePath(suggestion)}
            key={index}
            className="active:bg-[#ACAEAB] flex border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]
              active:transition-transform active:duration-150 active:ease-in-out active:transform-scale-110
            "
          >
            {suggestion.caption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomizedOptions;
