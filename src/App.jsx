import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Home from "./Pages/Home/Home";
import JobDetails from "./Pages/JobDetails/JobDetails";
import { JobPage } from "./Pages/JobPage/JobPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <JobPage />
    </>
  );
}

export default App;
