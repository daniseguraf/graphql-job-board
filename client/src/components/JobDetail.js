import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getJob } from '../queries/queries';
import { useEffect, useState } from 'react';

function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await getJob(jobId);
      setJob(response);
    };

    fetch();
  }, [jobId]);

  return (
    <div>
      <h1 className="title">{job?.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job?.company.id}`}>{job?.company.name}</Link>
      </h2>
      <div className="box">{job?.description}</div>
    </div>
  );
}

export default JobDetail;
