import React from 'react'
import "./JobDetails.css"


const JobDetails = () => {
  return (
    <>
      <title>Job Details</title>
      <div class="top">
        <header>
          <h1 class="detail_title" title="Company Role">Role in Company</h1>
        </header>
        <div class="company_name">,<a href="" title="Company Name">Company Name</a>
        </div>
      </div>
      <div class="detail view">
        <div class="internship">
          <div class="active_hiring">
            <span>Get hired as quickly as possible</span>
          </div>
          <div class="individual_internship_header">
            <div class="company">
              <h3 class="job_role_heading">
                <span class="profile-detail_page">Job Role to be specified</span>
              </h3>
              <h4 class="heading_company_name"></h4>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default JobDetails