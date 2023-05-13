import React from "react";

import Jobpage_banner from "./jobpage_banner.png";
import SearchJob from "../../Component/SearchJob";
import styled from "styled-components";

const Wrapper =styled.div`
height: 100vh;
position: fixed;
z-index:998;
overflow: hidden !important;
`
const Banner = styled.div`
    height: 150px;
    background-color:#F6F8FC;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    
   
    overflow: hidden !important;
    width: 100vw;
    @media screen and (max-width: 720px){
      height: 80px;
    }
`
const BannerHeading = styled.h1`


@media screen and (max-width: 720px){
  font-size: 16px;
}


`

const BannerImg = styled.img`

`

export const JobPage = () => {
  return (
    <>
      {/* Banner Section */}
      <Wrapper>
      <Banner>
        <BannerHeading>Your Dream Job </BannerHeading>
        <BannerImg src="./jobpage_banner.png"/>
      </Banner>
      <SearchJob /> 
      </Wrapper>
        
      
    </>
  );
};
