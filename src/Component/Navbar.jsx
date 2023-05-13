import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// images
import LogoIcon from "../assets/logopng.png";
import BellIcon from "../assets/bell.png";
import Blimp from "../assets/profile.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 4rem;
  position: sticky;
  padding-top: 20px;
  top: 0;
  background-color: white;
  width: 100vw;
  z-index: 999;
  @media screen and (max-width: 720px) {
    
  }
`;

const LeftContainer = styled.div`
  display: flex;
  
`;

const MiddleContainer = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  
  display: flex;
  gap: 10px;
  @media screen and (max-width: 720px) {
    
  }
`;
const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin-left: ${(props) => props.pd};
  cursor: pointer;
`;

const Heading = styled.h1`
  margin: 0 0 0 15px;
  @media screen and(max-width:720px) {
    font-size: 16px;
  }
`;

const HamBurger = styled.div`
  display: flex;
  visibility: hidden;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    visibility: visible;
  }
`;
const HamTop = styled.div`
  width: 40px;
  
  background-color: black;
  border-radius: 12px;
  transition: 0.5s ease all;
  transform-origin: 0% 50%;
  &.active {
    transform: rotate(32deg);
    
  }
  
`;
const HamCenter = styled.div`
  width: 40px;
  height: 6px;
  background-color: black;
  border-radius: 12px;
  

  &.active {
    visibility: hidden;
  }
`;
const HamBottom = styled.div`
  width: 40px;
  height: 6px;
  background-color: black;
  border-radius: 12px;
  transform-origin: 0% 50%;
  &.active {
    transform: rotate(-32deg);
    
  }
  transition: 0.5s ease all;
`;

const Navbar = () => {
  let url = useLocation();
  const changeOverflow = () => {
    document.body.classList.add("onOverflow");
  };
  const removeOverflow = () => {
    document.body.classList.remove("onOverflow");
  };

  const HandleHam = () => {
    let Hamtop = document.querySelector(".hamTop");
    let Hamcenter = document.querySelector(".hamCenter");
    let Hambottom = document.querySelector(".hamBottom");

    if (Hamtop.classList.contains("active")) {
      Hamtop.classList.remove("active");
      Hamcenter.classList.remove("active");
      Hambottom.classList.remove("active");
    } else {
      Hamtop.classList.add("active");
      Hamcenter.classList.add("active");
      Hambottom.classList.add("active");
    }
  };

  return (
    <>
      <Wrapper>
        <LeftContainer>
          <Link to="/">
            {" "}
            <Logo src={LogoIcon} />
          </Link>
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
            to="jobPage"
            className={`nav_links ${
              url.pathname === "/jobPage" ? "active" : ""
            }`}
          >
            Jobs
          </Link>

          <Link
            to="jobDetails"
            className={`nav_links ${
              url.pathname === "/jobDetails" ? "active" : ""
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
          <Logo src={BellIcon} />
          <Logo src={Blimp} pd="20px" />
          <HamBurger className="hamBurger" onClick={HandleHam}>
            <HamTop className="hamTop"></HamTop>
            <HamCenter className="hamCenter"></HamCenter>
            <HamBottom className="hamBottom"> </HamBottom>
          </HamBurger>
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default Navbar;
