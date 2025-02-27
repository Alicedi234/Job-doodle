import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import CommentForm from "../../components/CommentForm/CommentForm";
import Footer from "../../components/Footer/Footer";

export default function JobDetailPage(){
  const {id} =useParams();
  return(
    <>
    <Header />
    <JobCard />
    <CommentForm />
    <Footer />
    </>
  )
}