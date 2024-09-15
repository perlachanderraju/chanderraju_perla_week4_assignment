import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ my: 4 }}>
      {submitted ? (
        <Typography variant="h6" color="green">
          Application Submitted Successfully!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="resume"
            label="Resume Link"
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Apply
          </Button>
        </form>
      )}
    </Box>
  );
};

export default ApplyForm;
