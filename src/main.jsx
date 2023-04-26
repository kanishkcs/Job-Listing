import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { JobPage } from './Pages/JobPage/JobPage';
import JobDetails from './Pages/JobDetails/JobDetails';
import Home from './Pages/Home/Home';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/job-page' element={<JobPage/>}/>
    <Route path='/job-details' element={<JobDetails/>}/>
    
  </Routes>
   
  </Router>,
)
