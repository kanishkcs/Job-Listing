import React from "react";
import "./home.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Images

import ToolIcon from "../../assets/tool-box.png";
import Bullhorn from "../../assets/bullhorn.png"
import CodingIcon from "../../assets/coding.png"
import CustomerSupportIcon from "../../assets/customer-support.png"
import ProjectIcon from "../../assets/project-management.png"
import UserIcon from "../../assets/user.png"
import Design from "../../assets/web-design.png"

const Button = styled.button`
  background-color: ${(props) => props.color};
  width: 55px;
  height: 55px;
  border-radius: 7px;
  cursor: pointer;
`;

const GridImage = styled.img`
  width: 25px;
  height: 25px;
`;

const GridHeading = styled.h6``;

const GridSmall = styled.span`
  color: gray;
`;

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="item brandName">
          <h1>
            {" "}
            <a href="#"> First Step</a>
          </h1>
        </div>
        <div className="middle_container content">
          <Link to="/job-page">Find Jobs</Link>
          <a href="">Find Talent</a>
          <a href="">Upload Job</a>
          <a href="">About us</a>
        </div>

        <div className="right_container icon">
          <img className="bell_icon" src="bell.png" />
          <a href="#">Search</a>
        </div>
      </div>
      <div className="box">
        <div className="box1 box1Text">
          <span className="above_heading">
            {" "}
            #4923 jobs are avaiable right now
          </span>

          <h1> Find the most exciting jobs.</h1>
          <h4 className="last_heading">
            Leverage agile framworks to provide a robust synopsis for high level
            overviews.iterative to
          </h4>
        </div>
        <div className="box1 box1Image">
          <img
            src=" https://i0.wp.com/gbsn.org/wp-content/uploads/2022/01/gbsn-homepage-graphic-1.png?resize=768%2C768&ssl=1"
            alt=""
            width="400"
            height="300"
          />
        </div>
      </div>
      <div className="container2">
        <h3>Get hired in top companies</h3>
      </div>
      <div className="container3">
        <div className="content3">
          <span> Makeless</span>
          <img className="clap_icon" src="clap.png" />
          <span>coworks</span>
          <img className="leaf_icon" src="leaf.png" />
          <span>greener</span>
          <img className="circle_icon" src="circle.png" />
          <span>SAAS TODAY</span>
          <span> dorfus</span>
        </div>

        <h1 className="container4">Explore by category</h1>

        <h3 className="last_line">
          {" "}
          Leverage agile frameworks to provide a robust synopsis for high level
          overview to start.
        </h3>
      </div>
      <div className=" grid_container5">
        <div class="grid-item">
          <Button>
            <GridImage src={ToolIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={CodingIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={Design} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={Bullhorn} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={CustomerSupportIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={UserIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={ProjectIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div class="grid-item">
          <Button>
            <GridImage src={ToolIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
       
      </div>
      <div className="footer">
        <div className="container_text">
          <h3> Most comprehensive job portal</h3>
          <p> we must explain to you how all this mistake idea of denouncing</p>
        </div>
        <div className="footer_info">
          <a href="#">LON IN </a>
          <a href="#">REGISTER</a>
        </div>
      </div>
    </>
  );
};

export default Home;
