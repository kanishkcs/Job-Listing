import React from "react";
import "./JobDetails.css";
import styled from "styled-components";
import JobCard from "../../Component/JobCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-width: 70% !important;
  position: fixed;
  top: 5rem;
  
`;
const Tags = styled.button`
  width: 13rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  border-radius: 8px;
  display: inline;
  padding: 5px;
  border: none;
  border-radius: 8px;
  margin-left: 30px;
  font-size: 1rem;
`;

const Container = styled.div`
  max-width: 50%;
  height: auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 40px 0 40px;
margin: 0px 0px 0px 10rem ;
  min-width: 340px !important;
  @media screen and (max-width: 720px) {
    margin-left: 25px;
  }
`;

const Heading = styled.h2`
    
`;

const List = styled.li``;

const JobDetails = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          Full Stack Web Developer work from home internship at the First Step{" "}
        </Heading>

        <Container>
          <JobCard className="job_details_card" />
          <Heading>About the Company Role</Heading>
          <p>
            Are you looking for an opportunity to help empower marginalized
            communities? We are seeking an enthusiastic, motivated, and reliable
            Volunteering Intern to join our team at NayePankh Foundation. If you
            are compassionate and enjoy working with people, this is the job for
            you.  
          </p>
          <Heading>Skills required</Heading>
          <div>
            <Tags bgColor="#fff2e6" fontColor="#e2b066">
              HTML
            </Tags>
            <Tags bgColor="#fdedf0" fontColor="#c57283">
              CSS
            </Tags>
            <Tags bgColor="#fff2e6" fontColor="#e2b066">
              JavaScript
            </Tags>
            <Tags bgColor="#fdedf0" fontColor="#c57283">
              Bootstrap
            </Tags>
          </div>

          <Heading>Who can Apply</Heading>
          <p>Canditates who can apply</p>
          <ol>
            <List>Are available for full-time(in office ) internship</List>
            <List>
              Can start internship between 4th May'23 and 8th June'23{" "}
            </List>
            <List>Are available for the duration of 6 months</List>
            <List> Have relevant skills and interests </List>
            
          </ol>
          
          <Heading>Perks</Heading>
          <Tags bgColor="#fff2e6" fontColor="#e2b066">
            Certificate
          </Tags>
          <Tags bgColor="#fdedf0" fontColor="#c57283">
            Letter of Recommendation
          </Tags>
          <Tags bgColor="#fff2e6" fontColor="#e2b066">
            5 days a week
          </Tags>
          <Tags bgColor="#fdedf0" fontColor="#c57283">
            Fexible work hours
          </Tags>

          <Heading>Number of openings</Heading>
          <p>6</p>

          <button className="skillBtn" type="submit" value="submit">
            Apply Now
          </button>
        </Container>
      </Wrapper>
    </>
  );
};

export default JobDetails;
