import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./app.css"
import Home from './Pages/Home/Home'
import JobDetails from './Pages/JobDetails/JobDetails'
import { JobPage } from './Pages/JobPage/JobPage'
import CustomCursor from './Component/CustomCursor';
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <CustomCursor />
<JobDetails/> 

    </>
            
  )
}

export default App
