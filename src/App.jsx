import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import mockJobs from './mockJobs';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import ApplyForm from './components/ApplyForm';
import Pagination from './components/Pagination';

import './App.css'

function App() {
  const [jobs, setJobs] = useState(mockJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  // Filtering jobs based on the search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Container>
        <CssBaseline />
        <Typography variant="h2" gutterBottom align="center">
          Job Board
        </Typography>
        <SearchBar setSearchTerm={setSearchTerm} />
        <JobList jobs={currentJobs} />
        <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={filteredJobs.length}
          paginate={paginate}
        />
        <ApplyForm />
      </Container>
    </div>
  );
}

export default App;
