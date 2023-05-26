import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { JobPage } from './Pages/JobPage/JobPage';
import Home from './Pages/Home/Home';
import Navbar from './Component/Navbar';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  
   <App/>
  </Router>,
)
