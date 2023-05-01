import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// images
import LogoIcon from "../assets/logopng.png";
import BellIcon from "../assets/bell.png"
import Blimp from "../assets/profile.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0px;
  position: fixed;
  background-color: white;
  width: 100%;

  
`;

const LeftContainer = styled.div`
  display: flex;
`;

const MiddleContainer = styled.div`
  display: flex;
  
`;
const RightContainer = styled.div`
display: flex;
justify-content: space-between;
width: 3em;

`;
const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin-left: ${props=>props.pd} ;
  cursor: pointer;
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
        <Link to='/'> <Logo src={LogoIcon} /></Link>
          <Heading>First Step</Heading>
        </LeftContainer>

        <MiddleContainer>
          <Link
            to="/"
            className={`nav_links ${url.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="job-page"
            className={`nav_links ${
              url.pathname === "/job-page" ? "active" : ""
            }`}
          >
            Jobs
          </Link>

          <Link
            to="job-details"
            className={`nav_links ${
              url.pathname === "/job-details" ? "active" : ""
            }`}
          >
            Post a Job{" "}
          </Link>
          <Link
            to="search"
            className={`nav_links ${
              url.pathname === "/search" ? "active" : ""
            }`}
          >
            {" "}
            Search
          </Link>
        </MiddleContainer>
        <RightContainer>

         <Logo src={BellIcon}   />
          <Logo src={Blimp} pd="20px"/>
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default Navbar;
