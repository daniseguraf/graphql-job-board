import JobList from './JobList';
import { getJobs } from '../queries/queries';
import { useEffect, useState } from 'react';

function JobBoard() {
  const [jobs, setJobs] = useState([]);

  const fetch = async () => {
    const response = await getJobs();
    setJobs(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
