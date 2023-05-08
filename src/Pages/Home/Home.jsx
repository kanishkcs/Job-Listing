import React from "react";
import "./home.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Images

import MessageIcon from "../../assets/chatting.png";
import TwitterIcon from "../../assets/twitter.png";
import ToolIcon from "../../assets/tool-box.png";
import Bullhorn from "../../assets/bullhorn.png";
import CodingIcon from "../../assets/coding.png";
import CustomerSupportIcon from "../../assets/customer-support.png";
import ProjectIcon from "../../assets/project-management.png";
import UserIcon from "../../assets/user.png";
import Design from "../../assets/web-design.png";
import AppleIcon from "../../assets/apple.png";
import GoogleIcon from "../../assets/google.png";
import AmazonIcon from "../../assets/amazon.png";
import FlipkartIcon from "../../assets/flipkartpng.png";
import BusinessIcon from "../../assets/Buisness.png";

const Button = styled.button`
  background-color: ${(props) => props.colors};
  width: 55px;
  height: 55px;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid lightgray;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const GridImage = styled.img`
  width: 25px;
  height: 25px;
`;

const GridHeading = styled.h6``;

const GridSmall = styled.span`
  color: gray;
`;

const GetStarted = styled.figure`
  display: flex;
  font-size: 1.7rem;
  color: gray;
`;

const GetStartedLogo = styled.img`
  width: 34px;
  margin-right: 8px;
`;

const Home = () => {
  return (
    <>
      <div className="box">
        <div className="box1">
        <div>
          <span className="above_heading">
            {" "}
            #4923 jobs are avaiable right now
          </span>

          <h1 className=" box1Text"> Find the most exciting jobs.</h1>
          <h4 className="last_heading">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.iterative to
          </h4>
          </div>
        </div>
        <div className="rotate-container main_right">
          <img
            className="box1Image "
            src={BusinessIcon}
            alt="loading "
            width="700"
            height="700"
          />
        </div>
      </div>
      <div className="container2">
        <h1>Get hired in top companies</h1>
      </div>
      <div className="container3">
        <div className="content3">
          <GetStarted className="item">
            <GetStartedLogo src={AppleIcon} />
            <figcaption>Apple</figcaption>
          </GetStarted>
          <GetStarted className="item">
            <GetStartedLogo src={GoogleIcon} />
            <figcaption>Google</figcaption>
          </GetStarted>
          <GetStarted className="item">
            <GetStartedLogo src={AmazonIcon} />
            <figcaption>Amazon</figcaption>
          </GetStarted>
          <GetStarted className="item">
            <GetStartedLogo src={FlipkartIcon} />
            <figcaption>Flipkart</figcaption>
          </GetStarted>
        </div>
      </div>
      <div className="container4">
      <h1 >Explore by category</h1>
        
        <h2 className="last_line">
          {" "}
          Leverage agile frameworks to provide a robust synopsis for high level
          overview to start.
        </h2>
      </div>
      
      <div className=" grid_container5">
        <div className="grid-item">
          <Button colors="#5C469C">
            <GridImage src={ToolIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#B6EAFA">
            <GridImage src={CodingIcon} />
          </Button>
          <GridHeading>Design</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#FF884B">
            <GridImage src={Design} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#DF2E38">
            <GridImage src={Bullhorn} />
          </Button>
          <GridHeading>Project</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#FF6E31">
            <GridImage src={CustomerSupportIcon} />
          </Button>
          <GridHeading>Mangement</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#FED049">
            <GridImage src={UserIcon} />
          </Button>
          <GridHeading>Block chain</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#86E5FF">
            <GridImage src={ProjectIcon} />
          </Button>
          <GridHeading>Development</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#68B984">
            <GridImage src={ToolIcon} />
          </Button>
          <GridHeading>Database</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
      </div>
      <div className="footer">
        <div className="container_text">
          <h1> Most comprehensive job portal</h1>

          <p> we must explain to you how all this mistake idea of denouncing</p>
          <div className="footer_button">
            <button type="submit" className="register_btn">
              RGISTER{" "}
            </button>
            <button type="register" className="login_btn">
              LOG IN{" "}
            </button>
          </div>
        </div>
        E
        <div className="footer_container">
          <div className="row">
            <div className="footer_col">
              <span className="firstHalf">
                JUST <span className="secondHalf">CAMP</span>
              </span>

              <div className="contact_us_div">
                <div className="contact_us_logo_div">
                  {/* <img src={MessageIcon}></img> */}
                </div>
                <div className="contact_us_right_div">
                  <div className="contact_us_heading">
                    <h3>Contact us at </h3>
                  </div>
                  <div className="contact_us_email">
                    <span className="footer_email">support@uxtheme.net</span>
                  </div>
                </div>
              </div>

              <div className="follow_us_div">
                <h4 className="socialitem">Follow us</h4>
                <div className="socialitem socialmedia_icon_div">
                  <img src={TwitterIcon} />
                </div>
              </div>

              <div className="social-links">
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="footer_col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>{" "}
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>{" "}
                </li>
                <li>
                  <a href="#">News</a>{" "}
                </li>
                <li>
                  <a href="#">Help desk</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Digital Marking </a>{" "}
                </li>
                <li>
                  <a href="#">SEO for Business</a>
                </li>
                <li>
                  <a href="#">Avasta Dash</a>
                </li>
                <li>
                  <a href="#">UI Design</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4> Legal</h4>
              <ul>
                <li>
                  <a href="#"> Privacy Policy</a>{" "}
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
