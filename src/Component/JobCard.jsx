import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  height: 175px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 40px 0 40px ;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 10px ;
    padding-right: 10px;
}
`;
const TopContainer = styled.div`
display: flex;
justify-content: space-between;


`;

const Logo = styled.div`


`

const Heading = styled.h1`
margin-bottom: 9px;
font-size: 1.3rem;
@media screen and (max-width: 768px) {
    font-size: .9rem;
}

`;
const Tags = styled.button`
border: none;
border-radius: 8px;
font-size: 1rem;
width: 7rem;
padding: 5px;
display: inline;
margin-left: 30px;
background-color: ${props=> props.bgColor};
color :  ${props=> props.fontColor};

@media screen and (max-width: 768px) {
    font-size: .7rem;
    width: 4rem;
    margin: 0 5px 0 0;
}


`

const Location = styled.div``;
const Small = styled.small``;

const DiscriptionDiv = styled.div`
padding: 20px 0px 0px 30px;
`;

const DiscriptionList = styled.li``;

const HEadingDiv = styled.div`
display: flex;
flex-direction: column;
`


const JobCard = () => {
  return (
    <>
      <Wrapper>
        <TopContainer>

        <HEadingDiv>
        <Heading>Full Stack Developer</Heading>
        <div>
        <Tags bgColor="#fff2e6" fontColor="#e2b066">Node.js </Tags>
        <Tags  bgColor="#fdedf0" fontColor="#c57283">React Js </Tags>
        <Tags  bgColor="#fdedf0" fontColor="#c57283">Express Js</Tags>
        </div>
       

        </HEadingDiv>
         
          <Location>
            <Heading>london UK</Heading>
          </Location>
        </TopContainer>
        <DiscriptionDiv>
            <DiscriptionList>Handel Backend and Front End Both</DiscriptionList>
            <DiscriptionList>Restful API </DiscriptionList>
            <DiscriptionList>Knowledge of SQL and NoSQL Database</DiscriptionList>
        </DiscriptionDiv>
      </Wrapper>
    </>
  );
};

export default JobCard;
