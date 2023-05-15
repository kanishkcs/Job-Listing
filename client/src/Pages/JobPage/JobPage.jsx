import React from "react";

import Jobpage_banner from "../../assets/jobpage_banner.png";
import SearchJob from "../../Component/SearchJob";
import styled from "styled-components";

const Wrapper =styled.div`
height: 100vh;
position: fixed;

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
      height: 60px;
    }
    @media screen and (max-width: 1450px ){
      height: 65px;
    }
`
const BannerHeading = styled.h1`


@media screen and (max-width: 720px){
  font-size: 16px;
}


`

const BannerImg = styled.img`

@media screen and (max-width:720px){
  width: 140px;
  height: 60px;
}

`

export const JobPage = () => {
  return (
    <>
      {/* Banner Section */}
      <Wrapper>
      <Banner>
        <BannerHeading>Your Dream Job </BannerHeading>
        <BannerImg src={Jobpage_banner}/>
      </Banner>
      <SearchJob /> 
      </Wrapper>
        
      
    </>
  );
};
