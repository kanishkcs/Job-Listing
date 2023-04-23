import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";

// Images and Icons
import SearchIcon from "../assets/search.png";
import LocationIcon from "../assets/location.png";

const Wrapper = styled.div`
  height: auto;
  width: 100vw;
  padding-left: 3vw;
  margin-top: 40px;
  display: flexs;

  @media screen and (max-width: 768px) {
    padding: 4px;

    margin-top: 10px;
  }
`;

const LeftContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 72vh;
  flex-basis: 19%;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  height: 100vh;

`;

const NumberOfJobs = styled.h3`
  margin-top: 25px;
  padding-left: 5px;
  color: gray;
`;

const SearchDiv = styled.div`
  display: flex;
  width: 90%;
  
  position: relative;
  flex-basis: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 25px;
  }
`;

const Input = styled.input`
height: 65px;
  width: 90%;
  padding-left: 40px;
  border-radius: ${(props) =>
    props.$left ? "10px 0 0 10px" : "0 10px 10px 0 "};
  border: 1px solid lightgray;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SerachButton = styled.button`
  position: absolute;
  top: 20%;

  right: 25px;
  background-color: #009c4c;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  width: 10%;
  height: 35px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    top: 135%;
    right: 35%;
    width: 120px;
    height: 35px;
  }
`;

const JobListDiv = styled.div`
  flex-grow: 1;
  overflow-y: scroll; 
  
`;

const SearchIcons = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  left: 10px;
`;
const LocationIcons = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  right: 47%;
  @media screen and (max-width: 768px) {
    right: 41%;
  }
`;

const SearchJob = () => {
  return (
    <>
      <Wrapper>
        <LeftContainer></LeftContainer>

        <RightContainer>
          <SearchDiv>
            <Input $left placeholder="Search Job title or Role" />
            <SearchIcons className="search_icon" src={SearchIcon} />
            <LocationIcons src={LocationIcon} />
            <Input placeholder="Search By Country" />

            <SerachButton>Search</SerachButton>
          </SearchDiv>
          <NumberOfJobs>250 Jobs results</NumberOfJobs>
          <JobListDiv>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </JobListDiv>
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default SearchJob;
