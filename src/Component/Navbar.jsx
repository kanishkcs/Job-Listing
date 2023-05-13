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
  background-color: honeydew;
  width: 100vw;
  z-index: 999;
  overflow: hidden !important;
  @media screen and (max-width: 720px) {
    justify-content:space-between;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  font-size:22px;
  @media screen and (max-width: 720px) {
    font-size: 19px !important;
    margin-left: 10px;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media screen and (max-width: 720px) {
    margin-right: 14px;
    gap: 10px;
  }
`;
const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-left: ${(props) => props.pd};
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: 24px;
    height: 24px;
  }
`;

const Heading = styled.span`
  margin: 0 0 0 15px;
  @media screen and (max-width: 720px){
    margin: 4px 0 0 5px;
  }
 
`;

const HamBurger = styled.div`
 -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  gap: 4px;
  height: auto;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    visibility: visible;
    height: auto;
    outline: none !important;
  }
`;
const HamTop = styled.div`
  width: 35px;
  height: 5px;
  outline: none;
  background-color: black;
  border-radius: 12px;
  transition: 0.5s ease all;
  transform-origin: 0% 50%;
  &.active {
    transform: rotate(32deg);
    
  }
  
`;
const HamCenter = styled.div`
  width: 35px;
  outline: none;
  height: 5px;
  background-color: black;
  border-radius: 12px;
  

  &.active {
    visibility: hidden;
  }
`;
const HamBottom = styled.div`
  width: 35px;
  outline: none;
  height: 5px;
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
          <Link to="/login"><Logo src={Blimp} /></Link>
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
