import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// images
import LogoIcon from "../assets/logopng.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const MiddleContainer = styled.div`

display: flex;
`;
const RightContainer = styled.div``;
const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

const Heading = styled.h1`
  margin: 0 0 0 15px;
`;

const Navbar = () => {
  let url = useLocation();


  return (
    <>
      <Wrapper>
        <LeftContainer>
          <Logo src={LogoIcon} />
          <Heading>First Step</Heading>
        </LeftContainer>

        <MiddleContainer>
        <Link to="/" className={`nav_links ${url.pathname==="/" ? "active" :"" }`}>Home</Link>
      <Link to='job-page' className={`nav_links ${url.pathname==="/job-page" ? "active" :"" }`}>Jobs</Link>
      
      <Link to="job-details" className={`nav_links ${url.pathname==="/job-details" ? "active" :"" }`}>Post a Job </Link>
      <Link to="search" className={`nav_links ${url.pathname==="/search" ? "active" :"" }`}> Search</Link>

        </MiddleContainer>
        <RightContainer></RightContainer>
      </Wrapper>
    </>
  );
};

export default Navbar;
