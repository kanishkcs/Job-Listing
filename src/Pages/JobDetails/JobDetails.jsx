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
const Tags = styled.div`
color : black;
width : 80px;
height : 20px;
background-color : grey;
border-radius : 7px;
`

const Container = styled.div`

`

const Heading = styled.h2`

`

const List = styled.li`

`


const JobDetails = () => {
  return (
    <>
      <Wrapper>



        <Heading>Full Stack Web Developer </Heading>
      </Wrapper>
      <JobCard />

      <Container>
        <Heading>About the Company Role</Heading>
        <p>Are you looking for an opportunity to help empower marginalized communities? We are seeking an enthusiastic, motivated, and reliable Volunteering Intern to join our team at NayePankh Foundation.
          If you are compassionate and enjoy working with people, this is the job for you.
          As a volunteering intern, you will be given four different tasks for different weeks, you will be required to do social work near your area and spread positivity, and share the photos and videos of that social work on your social media,
          you will also be supporting the organization by raising funds and encouraging your friend to accompany you in this internship.
          You will support our organization's efforts to encourage volunteering and contribute to the development of the community.</p>
        <Heading>Skills required</Heading>
        <Tags className="skill_section">HTML</Tags>
        <Tags className="skill_section">CSS</Tags>
        <Tags className="skill_section">JavaScript</Tags>
        <Tags className="skill_section">Bootstrap</Tags>



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
        <p>Certificate   Letter of Recommendation   Flexible Work Hours     Informal Dress Code   5 days a week</p>
        <Heading>Number of openings</Heading>
        <p>6</p>

      </Container>

    </>

  )
}

export default JobDetails