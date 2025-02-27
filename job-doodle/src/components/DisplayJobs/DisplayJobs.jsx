import{Link, useParams} from "react-router-dom";
export default function DisplayJobs(){
  const {id} = useParams();
  return(
    <div>
      <Link to={`/job/${id}`}>
      <div>job1</div>
      </Link>
      <Link to={`/job/${id}`}>
      <div>job2</div>
      </Link>
      <Link to={`/job/${id}`}>
      <div>job3</div>
      </Link>
      <Link to={`/job/${id}`}>
      <div>job4</div>
      </Link>
    </div>
  )
}