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
  display: flex;
  margin-top: 6rem;
  position: absolute;

  @media screen and (max-width: 768px) {
    padding: 4px;

    margin-top: 10px;
  }
`;

const LeftContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 68vh;
  flex-basis: 19%;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TopHeading = styled.div`
  display: flex;
  justify-content: space-around;
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

  @media screen and (max-width: 670px) {
    margin-top: 99px;
  }
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
    font-size: 0.8rem;
    height: 45px;
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
    top: 240%;
    right: 35%;
    width: 120px;
    height: 35px;
  }
`;

const JobListDiv = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SearchIcons = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  left: 10px;
  @media screen and (max-width: 670px) {
    top: 90%;
  }
`;
const LocationIcons = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  right: 47%;
  @media screen and (max-width: 768px) {
    right: 41%;
    top: 95%;
  }
`;

const FilterSpan = styled.span`
  color: red;
  margin-top: 1.3em;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #0b9e44;
  }
`;

const DatePost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-top: 9px;
`;

const Select = styled.select`
  width: 21em;
  height: 2.7rem;
  border-radius: 7px;
  font-size: 1rem;
  padding: 10px;
`;
const Label = styled.label`
  margin-bottom: 15px;
`;
const Option = styled.option`
  font-size: 1.3rem;
  padding: 10px;
`;

const JobType = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-top: 9px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4em;
  
`;
const Salary= styled.div`
padding: 9px 25px 25px 25px;

`

const ApplyFilter = styled.button`

width: 9em;
height: 3em;
font-size: 1rem;
border-radius: 5px;
border:  none;
color: white;
background-color: #009c4c;
position: relative;
left: 7em;
top: 2em;

`

const JobTypeInput = styled.input``;

const InputDiv = styled.div`
  display: flex;
`;
const SearchJob = () => {
  const jobCards = [];
  for (let i = 0; i < 60; i++) {
    jobCards.push(<JobCard key={i} />);
  }
  return (
    <>
      <Wrapper>
        <LeftContainer>
          <TopHeading>
            <h3>Filter</h3>
            <FilterSpan>Clear All</FilterSpan>
          </TopHeading>
          <hr></hr>
          <DatePost>
            <h3>Date Posted</h3>
            <Select>
              <Option selected>Latest</Option>
              <Option selected>This Week</Option>
              <Option selected>This Month</Option>
              <Option selected>This Year</Option>
            </Select>
          </DatePost>
          <hr></hr>

          <JobType>
            <h3>Job Type</h3>
            <InputDiv>
              <CheckBoxContainer>
                <div>
                  <JobTypeInput type="radio" name="full_time" />
                  <Label htmlFor="full_time">Full Time</Label>
                  
                </div>
                <br/>
                 
                <div>
                  <JobTypeInput type="radio" />
                  <Label htmlFor="full_time">Internship</Label>
                </div>
                
              </CheckBoxContainer>
              <CheckBoxContainer>
                <div>
                  <JobTypeInput type="radio" name="full_time" />
                  <Label htmlFor="full_time">Full Time</Label>
                </div>
                <br/>
                <div>
                  <JobTypeInput type="radio" />
                  <Label htmlFor="full_time">Internship</Label>
                </div>
              </CheckBoxContainer>
            </InputDiv>
          </JobType>
          <hr/>
      <Salary>

        <h3>Salary Range</h3>
        <JobTypeInput type="range"/>
      </Salary>
      <hr/>
      <div>
        <ApplyFilter type="submit">Apply Filter</ApplyFilter>
      </div>


        </LeftContainer>

        <RightContainer>
          <SearchDiv>
            <Input $left placeholder="Search Job title or Role" />
            <SearchIcons className="search_icon" src={SearchIcon} />
            <LocationIcons src={LocationIcon} />
            <Input placeholder="Search By Country" />

            <SerachButton>Search</SerachButton>
          </SearchDiv>
          <NumberOfJobs>250 Jobs results</NumberOfJobs>
          <JobListDiv>{jobCards}</JobListDiv>
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default SearchJob;
