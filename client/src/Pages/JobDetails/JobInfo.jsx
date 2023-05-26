import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 1.5rem;
  @media (max-width: 395px) {
    font-size: 1rem;
  }
`;
const Heading4 = styled.h4`
  margin-bottom: 10px;
  @media (max-width: 395px) {
    font-size: 0.8rem;
  }
`;

const Container = styled.div`
  padding: 10px 20%;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media ((min-width: 796px) and (max-width:1210px)) {
    padding: 10px 10%;
  }
  @media ((min-width: 400px) and (max-width:905px)) {
    padding: 10px 5%;
  }
  @media (max-width: 450px) {
    padding: 10px 0%;
    border-radius: ;
  }
`;
const BodyContainer = styled.div`
  border-radius: 12px;
  border: 1px solid #dde6ed;
  padding: 20px;
  background-color: white;
  @media (max-width: 450px) {
    border-radius: 0px;
  }
`;
const Div = styled.div`
  align-items: center;
  text-align: center;
`;

const Btab = styled.button`
  border-radius: 50px;
  padding: 8px 30px;
  font-size: 0.7rem;
  border: 1px solid #526d82;
  margin-right: 10px;
  margin-bottom: 10px;
  background: transparent;
  color: #484848;
  @media (max-width: 395px) {
    padding: 6px 20px;
    font-size: 0.6rem;
  }
`;
const Btab2 = styled.button`
  padding: 15px 45px;
  background-color: #00a5ec;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 20px;
  @media (max-width: 395px) {
    font-size: 0.7rem;
    padding: 10px 35px;
  }
`;
const Para = styled.p`
  font-size: 0.9rem;
  color: #484848;
  @media (max-width: 395px) {
    font-size: 0.7rem;
  }
`;
const Div2 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Ulist = styled.ul`
  list-style: disc;
`;
const List = styled.li`
  font-size: 0.9rem;
  color: #484848;
  @media (max-width: 395px) {
    font-size: 0.7rem;
  }
`;
const Para2 = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  @media (max-width: 395px) {
    font-size: 0.6rem;
  }
`;
const Div3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 15px;
`;
const Div4 = styled.div`
  margin-right: 80px;
  @media (max-width: 395px) {
    margin-right: 50px;
  }
`;
const Para3 = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  color: #484848;
  @media (max-width: 395px) {
    font-size: 0.7rem;
  }
`;
const Btn4 = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  margin-right: 10px;
  border: none;
  background-color: #eeeeee;
  font-size: 0.7rem;
  margin-bottom: 10px;
`;
const Div5 = styled.div`
  margin-bottom: 30px;
`;

const JobInfo = () => {
  return (
    <>
      <Container>
        <Div>
          <Heading1>SDE Role at Apple</Heading1>
        </Div>
        <BodyContainer>
          <Div2>
            <div>
              {" "}
              <Heading4>Online teaching MEAN stack</Heading4>
              <Para3>
                CodeZen{" "}
                <span>
                  <a
                    href=""
                    style={{ "text-decoration": "none", color: "#00a5ec" }}
                  >
                    Website
                    <i
                      class="bx bx-link-external"
                      style={{ "margin-left": "2px" }}
                    ></i>
                  </a>
                </span>
              </Para3>
            </div>

            <Para2>
              <i class="bx bx-home" style={{ "margin-right": "7px" }}></i>Work
              from home
            </Para2>
          </Div2>
          <Div3>
            <Div4>
              <Para3>
                <i
                  class="bx bx-play-circle"
                  style={{ "margin-right": "7px" }}
                ></i>
                START DATE
              </Para3>
              <Para2>Immediately</Para2>
            </Div4>
            <Div4>
              <Para3>
                <i class="bx bx-calendar" style={{ "margin-right": "7px" }}></i>
                DURATION
              </Para3>
              <Para2>3 Months</Para2>
            </Div4>
            <Div4>
              <Para3>
                <i class="bx bx-money" style={{ "margin-right": "7px" }}></i>
                STIPEND
              </Para3>
              <Para2>8,000-15,000 /month</Para2>
            </Div4>
            <Div4>
              <Para3>
                <i
                  class="bx bx-time-five"
                  style={{ "margin-right": "5px" }}
                ></i>
                APPLY BY
              </Para3>
              <Para2>8 Jun'23</Para2>
            </Div4>
          </Div3>
          <Div5>
            <Btn4>Posted daily</Btn4> <Btn4>Internship</Btn4>{" "}
            <Btn4>Part time allowed</Btn4>
          </Div5>
          <Heading4>Job Description</Heading4>
          <Para>
            Dear Candidate, It requires good communication skills with a great
            understanding of the code developments, team player, and
            self-motivation.We at Sun Shine IT Solution having openings for C#
            .Net Developer . If you have the required skills then please apply
            and be a part of a reputed organization. Hands-on experience in
            end-to-end development from requirement collection to making the
            website live on client-server based on technical needs. Should have
            the capability to adjust to emerging technologies/industry trends
            and apply them into operations and activities
          </Para>
          <Heading4>Skills Required</Heading4>
          <Btab>React</Btab> <Btab>Angular</Btab> <Btab>JavaScript</Btab>{" "}
          <Btab>HTML</Btab>
          <Heading4>Perks</Heading4>
          <Btab>Certificate</Btab> <Btab>Letter of recommendation</Btab>{" "}
          <Btab>Flexible work hours</Btab>
          <Heading4>Roles & Responsibilities</Heading4>
          <Ulist>
            <List>
              Working on PHP projects built on Wordpress, Laravel, Code-igniter,
              or any other framework.{" "}
            </List>
            <List>
              Building new projects from scratch on PHP related frameworks
            </List>
            <List>Writing about your development experience </List>
          </Ulist>
          <Heading4>Who can apply</Heading4>
          <Ulist>
            <List>Who are available for the part time job/internship </List>
            <List>
              who can start the part time job/internship between 25th May'23 and
              29th Jun'23
            </List>
            <List>who are available for duration of 3 months </List>
          </Ulist>
          <Heading4>Number of openings &nbsp; &nbsp;<span style={{ "font-weight": "500" }}>3</span></Heading4>
          <Div>
            <Btab2>Apply Now</Btab2>
          </Div>
        </BodyContainer>
      </Container>
    </>
  );
};

export default JobInfo;
