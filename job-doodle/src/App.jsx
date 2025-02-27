import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";



function App() {


  return (
    <main>
      <Router>
        <Routes>
          <Route path ="/" element={<HomePage />} />
          <Route path = "/job/:id" element={<JobDetailPage />} />
        </Routes>
      </Router>
    </main>
  

  )
}

export default App
