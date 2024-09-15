import React from 'react';
import { Grid } from '@mui/material';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <Grid container spacing={3}>
      {jobs.map((job) => (
        <Grid item key={job.id} xs={12} md={6}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;