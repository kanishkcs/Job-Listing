import React from 'react'
import styled from 'styled-components'

const Heading1=styled.h1`
   
`
const Heading4=styled.h4`
`

const Container=styled.div`
padding:10px 20%;
align-items:center;
   display:flex;
   flex-direction:column;
`
const BodyContainer=styled.div`
border-radius:12px;
border :1px solid #DDE6ED;
   padding:20px;
   background-color:white;
`
const Div=styled.div``

const Btab=styled.button`
border-radius:50px;
padding:8px 30px;
border :1px solid #526D82;
margin-right:10px;
background:transparent;
`
const Btab2=styled.button`
 padding :10px 40px;
 background-color:#19A7CE;
 border:none;
 border-radius:5px;
 color:white;
 font-size:0.9rem;
 cursor:pointer;
`

const Ulist=styled.ul`
list-style:disc;
`
const List=styled.li`
font-size:0.9rem;
`

const JobInfo = () => {
  return (
    <> 
       <Container>
        <Div><Heading1>SDE Role at Apple</Heading1></Div>
        <BodyContainer>
        <Heading4>Online Teaching MERN Stack</Heading4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Heading4>Skills Required</Heading4>
        <Btab>React</Btab> <Btab>Angular</Btab> <Btab>JavaScript</Btab> <Btab>HTML</Btab>
        <Heading4>Perks</Heading4>
        <Btab>Certificate</Btab> <Btab>Letter of recommendation</Btab> <Btab>Flexible work hours</Btab>
        <Heading4>Roles & Responsibilities</Heading4>
        <Ulist>
            <List>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </List>
            <List>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </List>
            <List>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </List>
        </Ulist>
        <Heading4>Who can apply</Heading4>
        <Ulist>
            <List>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </List>
            <List>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </List>
            <List>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </List>
        </Ulist>
        <Heading4>Number of openings</Heading4> 
        <Btab2>Apply</Btab2>
        </BodyContainer>
        </Container>
    </>
  )
}

export default JobInfo