import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Home from "./Pages/Home/Home";
import JobDetails from "./Pages/JobDetails/JobDetails";
import { JobPage } from "./Pages/JobPage/JobPage";
import Navbar from "./Component/Navbar";
import { Route,Routes } from "react-router-dom";
import PostJob from "./Pages/Post Job/PostJob";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/job-page' element={<JobPage/>}/>
    <Route path='/job-details' element={<JobDetails/>}/>
    <Route path='/postjob' element={<PostJob/>} />

    
  </Routes>
    </>
  );
}

export default App;
