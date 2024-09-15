import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="subtitle1">{job.company}</Typography>
        <Typography variant="subtitle2">{job.location}</Typography>
        <Typography variant="body2">{job.description}</Typography>
        <Box mt={2}>
          <Typography variant="caption">{job.type}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;