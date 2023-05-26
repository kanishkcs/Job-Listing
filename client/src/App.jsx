import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Home from "./Pages/Home/Home";
// import JobDetails from "./Pages/JobDetails/JobDetails";
import { JobPage } from "./Pages/JobPage/JobPage";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import PostJob from "./Pages/Post Job/PostJob";
import LoginReg from "./Pages/Login-Register/LoginReg"
import LoginRegister from "./Pages/Login-Register/LoginRegister"

import JobInfo from "./Pages/JobDetails/JobInfo";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>


      <Navbar />

      <Routes>
          {/* For Deployment */}
        <Route path='/' element={<Home />} />
        <Route path='/jobPage' element={<JobPage />} />
        <Route path='/jobDetails' element={<JobInfo />} />
        <Route path='/login' element={<LoginReg/>}/>
        <Route path='/login1' element={<LoginRegister/>}/>

        {/* For testing  */}
        {/* <Route path='/jobPage' element={<Home />} />
        <Route path='/' element={<JobPage />} />
        <Route path='/jobDetails' element={<JobDetails />} /> */}
        {/* <Route path='/login' element={<LoginRegister/>}/> */}
      </Routes>
      
    </>
  );
}

export default App;
