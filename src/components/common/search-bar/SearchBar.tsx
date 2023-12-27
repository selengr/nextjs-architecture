'use client';

import { Container, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        className="rtl teeeeeeeeeeeeest"
        id="search"
        type="search"
        label="جستجو"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 600 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className="tee">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Container>
  );
}
