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
  padding: 30px 0px;
  position: fixed;
  background-color: white;
  width: 100vw;
  z-index: 999;
  @media screen and  (max-width:720px){
    justify-content: space-between;
  }
`;

const LeftContainer = styled.div`
  display: flex;
`;

const MiddleContainer = styled.div`
  display: flex;
  @media screen and  (max-width:720px){
    display: none;
  }
`;
const RightContainer = styled.div`
  display: flex;
  
  justify-content: space-between;
  width: 3em;
  
`;
const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin-left: ${(props) => props.pd};
  cursor: pointer;
`;

const Heading = styled.h1`
  margin: 0 0 0 15px;
`;


const HamBurger = styled.div`
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and  (max-width:720px){
    visibility: visible;
  }
  
  `;
  const HamTop = styled.div`
    width: 45px;
    height: 8px;
    background-color: black;
    border-radius: 12px;
    transition: 0.7s ease all;
    &.active{
      transform: rotate(42deg);
      transform-origin:0 55% ;
    }

  `;
  const HamCenter = styled.div`
    width: 45px;
    height: 8px;
    background-color: black;
    border-radius: 12px;
    transition: 1s ease all;

    &.active{
      display:none;
    }
    
  `;
  const HamBottom = styled.div`
    width: 45px;
    height: 8px;
    background-color: black;
    border-radius: 12px;
    &.active{
      transform: rotate(-43deg);
      transform-origin:0 50%;
    }
    transition: 0.7s ease all;
  `;

const Navbar = () => {
  let url = useLocation();
  const changeOverflow = () => {
    document.body.classList.add("onOverflow");
  };
  const removeOverflow = () => {
    document.body.classList.remove("onOverflow");
  };

  const HandleHam = ()=>{
    let Hamtop = document.querySelector(".hamTop");
    let Hamcenter = document.querySelector(".hamCenter");
    let Hambottom = document.querySelector(".hamBottom");

    if(Hamtop.classList.contains("active")){
      Hamtop.classList.remove("active");
      Hamcenter.classList.remove("active");
      Hambottom.classList.remove("active");
    }
    else{
      Hamtop.classList.add("active");
      Hamcenter.classList.add("active");
      Hambottom.classList.add("active")
    }

  }

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
