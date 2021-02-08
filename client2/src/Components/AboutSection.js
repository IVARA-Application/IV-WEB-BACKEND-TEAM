//Import Icons

import student from "../img/student.svg";
import program from "../img/program.svg";
import events from "../img/events.svg";
import teacher from "../img/teacher.svg";
import Circles from "../img/Circles.png";
import React from "react";
import { Container, LeftSide, RightSide, AboutCards, Card } from "../styles";

const AboutSection = () => {
  return (
    <Container>
      <LeftSide>
        <h1>
          Our stats speak <br /> about us
        </h1>
        <p>
          Get unlimited access to <br /> structured courses & doubt <br />
          clearing sessions
        </p>
        <a href="#">
          <button className="sbtn">Start Learning</button>
        </a>
      </LeftSide>
      <RightSide>
        <AboutCards>
          <Card>
            <div className="icon">
              <img src={student} />
            </div>
            <p>
              200000 <span>+</span>
              <br /> Students
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={program} />
            </div>
            <p>
              120 <span>+</span> <br />
              Programs
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={events} />
            </div>
            <p>
              50 <span>+</span> Events
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teacher} />
            </div>
            <p>
              100 <span>+</span> Teachers
            </p>
          </Card>
        </AboutCards>
        <img className="circle" src={Circles} alt="" />
      </RightSide>
    </Container>
  );
};

export default AboutSection;
