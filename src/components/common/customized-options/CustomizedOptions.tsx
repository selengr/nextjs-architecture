import React from 'react';
// import { styled } from '@emotion/styled'; 
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./CustomizedOptions.module.css"

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const CustomizedOptions: React.FC<SearchBarProps> = ({ onChange, value }) => {
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    const searchTerm = event.target.value;
    const newSuggestions = [
      'United States',
      'Canada',
      'Mexico',
      'United Kingdom',
      'France',
      'Germany',
      'Italy',
      'Spain',
      'Australia',
      'Japan',
      'China',
    ].filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()));
    setSuggestions(newSuggestions);
  };

  return (
    <div className={styles.msCustomizedOptions}>
      <TextField
      color="success"
      className='w-full z-10 text-yellow font-ms-iranSansMobile rounded-2xl'
        id="search-bar"
        // label="جستجو"
        placeholder="جستجو" 
        value={value}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className='text-ms-crimson font-ms-iranSansMobile'>
              <IconButton>
                <SearchIcon className='text-ms-green'/> 
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
                    
      <ul
       className='flex z-0 -mt-4 flex-col w-full bg-ms-back-card-gray-12 rounded-2xl overflow-scroll'
        style={{
          // position: 'absolute',
          // top: '40px',
          // left: '0',
          width: '100%',
          padding: '10px',
          borderRadius: '0px 0px 15px 15px',
          listStyle: 'none',
          maxHeight:"205px",
          minHeight:0,
          height:"fitContent"
        }}
      >
       {suggestions.length>0&&
       <span className='text-ms-crimson pt-6 pb-4 pr-6 font-ms-medium text-ms-sm  border-b-solid  border-b-[#EDEDED] border-b-[1px]'>جستجو قبل</span>
       } 
        {suggestions.map((suggestion) => (
          <li className='flex  border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]'>{suggestion}</li>
        ))
        }

      </ul>
    </div>
  );
};

export default CustomizedOptions;