import skill from "../img/skill.svg";
import React from "react";
import { SkillContainer } from "../styles";

const SkillDev = () => {
  return (
    <SkillContainer>
      <div className="desc">
        <h1>Skill development Courses</h1>
      </div>
      <div className="skill-con">
        <div className="skill-left">
          <p>
            We believe in skills rather than mere <br /> knowledge. We dream of
            Skill India; thus,
            <br /> this initiative helps in overall skill
            <br /> development of an individual. Our skill <br /> development
            programs include 100+ <br /> Technical, Non-Technical, Management,
            <br /> Sports and Activities courses.
          </p>
        </div>
        <div className="skill-right">
          <img className="skill" src={skill} alt="" />
        </div>
      </div>
    </SkillContainer>
  );
};

export default SkillDev;
