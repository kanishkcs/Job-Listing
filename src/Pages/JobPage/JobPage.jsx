import React from "react";
import "./jobPage.css";
import Jobpage_banner from "./jobpage_banner.png";
import SearchJob from "../../Component/SearchJob";

export const JobPage = () => {
  return (
    <>
      {/* Banner Section */}

      <div className="jobpage_banner_div">
        <div className="jobpage_heading_div">
          <h1 className="jobpage_banner_heading">Find Your Dream Job</h1>
          <small>
            Looking for Jobs? Browse our latest jobs and apply today!
          </small>
        </div>

        <div className="jobpage_banner_png">
          <img className="jobpage_banner_logo" src={Jobpage_banner} />
        </div>
      </div>
      <SearchJob/>

    </>
  );
};

// How to import Image in React?
