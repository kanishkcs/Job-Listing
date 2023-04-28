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

const Button = styled.button`
  background-color: ${(props) => props.colors};
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
        <div className="grid-item">
          <Button colors="blue">
            <GridImage src={ToolIcon} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="cyan">
            <GridImage src={CodingIcon} />
          </Button>
          <GridHeading>Design</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="orange">
            <GridImage src={Design} />
          </Button>
          <GridHeading>Web Developer</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="Maroon">
            <GridImage src={Bullhorn} />
          </Button>
          <GridHeading>Project</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="#FF6969">
            <GridImage src={CustomerSupportIcon} />
          </Button>
          <GridHeading>Mangement</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="yellow">
            <GridImage src={UserIcon} />
          </Button>
          <GridHeading>Block chain</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="Teal">
            <GridImage src={ProjectIcon} />
          </Button>
          <GridHeading>Development</GridHeading>
          <GridSmall>437 vacancy</GridSmall>
        </div>
        <div className="grid-item">
          <Button colors="Mint">
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
                  <img src={MessageIcon}></img>
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
                <h4>Follow us</h4>
                <div className="socialmedia_icon_div">
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
                  <a href="#">About Us</a>{" "}
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
                  <a href="#">Festure</a>
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
                  <a href="#">Terms &Conditions</a>
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
