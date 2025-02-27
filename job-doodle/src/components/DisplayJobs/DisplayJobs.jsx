import{Link, useParams} from "react-router-dom";
import axois from "axios";
import { useState, useEffect } from "react";

export default function DisplayJobs(){
  const [jobs, setJobs] = useState([]);
  const {id} = useParams();
  const url = ""
  
  const fetchjobs = async () =>{
    
  }
  
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