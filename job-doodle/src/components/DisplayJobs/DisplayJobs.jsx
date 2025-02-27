import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DisplayJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const response = await axios.get(url);
        setJobs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchjobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="job-container">
      {jobs.map((job) => {
        return (
          <div className="job-section" key={job.id}>
            <h1 className="job-title">{job.title}</h1>
            <h2 className="job-company">{job.company}</h2>
            <h3 className="job-location">{job.location}</h3>
            <Link to={`/job/${job.id}`}>
              <button>Click to see details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}