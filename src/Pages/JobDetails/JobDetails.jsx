import React from 'react'
import "./JobDetails.css"
import styled from 'styled-components'
import JobCard from '../../Component/JobCard'


const Wrapper = styled.div`


display:flex;
justify-content: center;
flex-direction: column;
align-items:center;
`
const Tags = styled.button`
width : 13rem;
background-color :${(props) => props.bgColor}; 
color: ${(props) => props.fontColor};
border-radius : 8px;
display:inline;
padding:5px;
border: none;
border-radius:8px;
margin-left : 30px;
font-size: 1rem;
`

const Container = styled.div`
width: 50%;
height: 1350px;
border: 1px solid lightgray;
border-radius: 5px;
padding: 0 40px 0 40px;
margin-left:425px;
`

const Heading = styled.h2`
margin-top:100px;
`

const List = styled.li`

`


const JobDetails = () => {
  return (
    <>
      <Wrapper>

        <Heading>Full Stack Web Developer work from home internship at the First Step  </Heading>
      </Wrapper>


      <Container>
        <JobCard />
        <Heading>About the Company Role</Heading>
        <p>Are you looking for an opportunity to help empower marginalized communities? We are seeking an enthusiastic, motivated, and reliable Volunteering Intern to join our team at NayePankh Foundation.
          If you are compassionate and enjoy working with people, this is the job for you.
          As a volunteering intern, you will be given four different tasks for different weeks, you will be required to do social work near your area and spread positivity, and share the photos and videos of that social work on your social media,
          you will also be supporting the organization by raising funds and encouraging your friend to accompany you in this internship.
          You will support our organization's efforts to encourage volunteering and contribute to the development of the community.</p>

        <Heading>Skills required</Heading>
        <div>
          <Tags bgColor="#89ABE3" fontColor="#53331F">HTML</Tags>
          <Tags bgColor="#fdedf0" fontColor="#c57283">CSS</Tags>
          <Tags bgColor="#89ABE3" fontColor="#53331F">JavaScript</Tags>


        </div>


        <Heading>Who can Apply</Heading>
        <p>Canditates who can apply</p>
        <ol>
          <List>Are available for full-time(in office ) internship</List>
          <List>Can start internship between 4th May'23 and 8th June'23 </List>
          <List>Are available for the duration of 6 months</List>
          <List> Have relevant skills and interests </List>
          <List>Are from or open to relocate to Gurgaon and neighbouring cities  </List>
        </ol>
        <p> *Women who want to start/restart their career can also apply </p>


        <Heading>Perks</Heading>
        <Tags bgColor="#89ABE3" fontColor="#53331F">Certificate</Tags>
        <Tags bgColor="#fdedf0" fontColor="#c57283">Letter of Recommendation</Tags>
        <Tags bgColor="#89ABE3" fontColor="#53331F">5 days a week</Tags>


        <Heading>Number of openings</Heading>
        <p>6</p>

        <button className="skillBtn" type="submit" value="submit" >Apply Now</button>

      </Container>

    </>

  )
}

export default JobDetails