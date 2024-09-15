import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Box sx={{ my: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Jobs"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
