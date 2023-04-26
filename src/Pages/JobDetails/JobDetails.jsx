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
              <h4 class="heading_company_name"><a href="">Company Name</a></h4>
            </div>
            <div class="internship_logo"> </div>
          </div>
          <div class="individual_internship_details individual_internship_job">
            <p id="location_name">
              <span>
                <a class="location_link view_detail_button" href="">Chennai,</a>
                <a class="location_link view_detail_button" href=""> Bangalore,</a>
                <a class="location_link view_detail_button" href=""> Hyderabad</a>
              </span>
            </p>
            <div class="internship_other_details_container">
              <div class="other_detail_item_row">
                <div class="other_detail_item">
                  <div class="item_heading">
                    <span>
                      " Start Date "
                    </span>
                  </div>
                  <div class="item_body" id="start_date_first">
                    " Immediately "
                  </div>
                </div>
                <div class=" other_item_detail">
                  <div class="item_heading">
                    <span>CTC</span>
                  </div>
                  <div class="item_body_salary">
                    " 3 - 4.5 Lpa "
                  </div>
                </div>
                <div class="job_experience_item">
                  <div class="item_heading">
                    <span> Experience </span>
                  </div>
                  <div class="item_body desktop_show">year to be shown by company</div>
                  <div class="item-body mobile_responsive_show">year to be shown</div>
                </div>
              </div>
            </div>
            <div class = "last_application_date">
              <div class = "other_details">
                <div class = "item_heading">
                 <span>Apply By</span>
                </div>
                <div class = "item_body">Company given last date</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>


    </>

  )
}

export default JobDetails