import React from "react";
import styled from "styled-components";

// Images
import LocationIcon from "../assets/location.png";

const Wrapper = styled.div`
  width: 90%;
  height: 175px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 40px 0 40px;
  margin:23px;
  transition: 0.1s ease all;
  @media screen and (max-width: 768px) {
    width: 98%;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 3px;
  }
  @media screen and (max-width: 1450px) {
   height: 120px;
   margin-top: 5px;
  }
 &:hover{
  transform: scale(1.03);
 }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div``;

const Heading = styled.h1`
  margin-bottom: 9px;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1450px) {
   font-size: 0.8rem;
  }
`;
const Tags = styled.button`
  border: none;
  border-radius: 8px;
  font-size: .8.5rem;
  width: 7rem;
  padding: 5px;
  display: inline;
  margin-left: 30px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    width: 4rem;
    margin: 0 5px 0 0;
  }
  @media screen and (max-width: 1450px) {
    margin: 0 3px 0 0;
    padding: 3px;
  }
`;

const Location = styled.div`
  display: flex;
`;
const Small = styled.small``;

const DiscriptionDiv = styled.div`
  padding: 20px 0px 0px 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1450px) {
 
    padding: 3px;
  }
 
`;

const DiscriptionList = styled.li`

@media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1450px) {
    font-size: 0.8rem;
  }

`;

const HEadingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Locationicon = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 13px;
  margin-left: 2 5px;
  @media screen and (max-width: 670px) {
    margin-top: 6px;
    height: 25px;
    width: 25px;
  }
`;
const Company = styled.span`
`

const JobCard = ({Job}) => {
  return (
    <>
      <Wrapper>
        <TopContainer>
          <HEadingDiv>
            <Heading>{Job.title} at Apple</Heading>
            
            <div>
              <Tags bgColor="#fff2e6" fontColor="#e2b066">
                {Job.tags[0]}{" "}
              </Tags>
              <Tags bgColor="#fdedf0" fontColor="#c57283">
              {Job.tags[1]}{" "}
              </Tags>
              <Tags bgColor="#fdedf0" fontColor="#c57283">
              {Job.tags[2]}
              </Tags>
            </div>
          </HEadingDiv>

          <Location>
            <Locationicon src={LocationIcon} />
            <Heading>{Job.location}</Heading>
          </Location>
        </TopContainer>
        <DiscriptionDiv>
          <div>
          {/* {job.description.map(desc => (
          <DiscriptionList key={desc}>{desc}</DiscriptionList>
        ))} */}
        {Job.description.map((item)=>{
          return <DiscriptionList>{item}</DiscriptionList>
        })}
          </div>
          <Heading>{Job.salary}</Heading>
        </DiscriptionDiv>
      </Wrapper>
    </>
  );
};

export default JobCard;
