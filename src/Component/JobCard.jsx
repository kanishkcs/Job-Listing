import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  height: 175px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 40px 0 40px ;
`;
const TopContainer = styled.div`
display: flex;
justify-content: space-between;


`;

const Logo = styled.div`


`

const Heading = styled.h1`
margin-bottom: 5px;

`;
const Tags = styled.button`
border: none;
border-radius: 8px;
font-size: 1.2rem;
width: 8rem;
padding: 5px;
display: inline;
margin-left: 30px;
background-color: ${props=> props.bgColor};
color :  ${props=> props.fontColor};

`

const Location = styled.div``;
const Small = styled.small``;

const DiscriptionDiv = styled.div``;

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
        <Heading>Apple Me Aao</Heading>
        <div>
        <Tags bgColor="#fff2e6" fontColor="#e2b066">Node.js </Tags>
        <Tags  bgColor="#fdedf0" fontColor="#c57283">React Js </Tags>
        <Tags  bgColor="#fdedf0" fontColor="#c57283">React Js </Tags>
        </div>
       

        </HEadingDiv>
         
          <Location>
            <Heading>Sarvesh ki Gand me</Heading>
          </Location>
        </TopContainer>
        <DiscriptionDiv>
            <DiscriptionList>Apple wale chutiya hai</DiscriptionList>
            <DiscriptionList>Apple wale chutiya hai</DiscriptionList>
        </DiscriptionDiv>
      </Wrapper>
    </>
  );
};

export default JobCard;
