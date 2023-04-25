import React from "react";
import "./home.css";
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
          <a href="">Find Jobs</a>
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
        <div class="grid-item">Web developer</div>
        <div class="grid-item">Design</div>
        <div class="grid-item">Project manger</div>
        <div class="grid-item"> Data science </div>
        <div class="grid-item"> App Developer</div>
        <div class="grid-item">project</div>
        <div class="grid-item">Development</div>
        <div class="grid-item">Block chain</div>
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
