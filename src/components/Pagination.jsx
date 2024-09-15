import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';

const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
      <MuiPagination
        count={pageNumbers.length}
        onChange={(event, value) => paginate(value)}
        color="primary"
      />
    </Box>
  );
};

export default Pagination;
