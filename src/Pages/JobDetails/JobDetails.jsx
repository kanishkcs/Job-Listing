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
          <Heading>Skills Required</Heading>
          <p> HTML  CSS   JavaScript  Bootstrap  jQuery MongoDB MySQL   PHP  Wordpress </p>
          <Heading>Who can Apply</Heading>
            <p>Canditates who can apply</p>
           <ol>
            <List>I can Apply </List>
            <List>I can Apply </List>
            <List>I can Apply </List>
            <List>I can Apply </List>
            <List>I can Apply </List>
           </ol>
           <p> *Women or Men who want to restart their career can also apply </p>
          <Heading>Perks</Heading>
          
      </Container>

    </>

  )
}

export default JobDetails