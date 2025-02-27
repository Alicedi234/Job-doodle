import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import DisplayJobs from "../../components/DisplayJobs/DisplayJobs";
import Footer from "../../components/Footer/Footer";


export default function HomePage(){
  return(
    <>
    <Header />
    <Filter />
    <DisplayJobs />
    <Footer />
    </>
  )
}