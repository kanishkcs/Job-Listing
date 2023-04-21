import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
height:auto;
width: 90vw;
padding-left: 3vw;
padding-right: 3vw;
display: flexs;
`;

const LeftContainer = styled.div`

width: 17vw;
height: 40vh;
flex-basis: 30%;

`;

const RightContainer = styled.div`

flex-grow: 1;
display: flex;
flex-direction: column;


`


const SearchDiv = styled.div`
  display: flex;
  width: 90%;
  height: 40px;
  position: relative;
  flex-basis: 60px;
 
`;

const Input = styled.input`
  width: 90%;
`;

const SerachButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;

`;


const JobListDiv = styled.div`
flex-grow:1;

`

const SearchJob = () => {
  return (
    <>
      <Wrapper>
        <LeftContainer>

        </LeftContainer>

        <RightContainer>
          <SearchDiv>
            <Input placeholder="Search by Role" />
            <Input placeholder="Search By Country" />
            <SerachButton>Search</SerachButton>
          </SearchDiv>

          <JobListDiv>

          </JobListDiv>
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default SearchJob;
