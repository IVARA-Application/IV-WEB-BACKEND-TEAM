import React from "react";
import sac from "../img/SAC.png";
import { SacMain } from "../styles";

const StudyAboardCourse = () => {
  return (
    <SacMain>
      <h1>Study Abroad Courses</h1>

      <div>
        <img className="sac" src={sac} alt="" />
      </div>
      <p>
        Study Abroad Program is an initiative led by IVentors Initiatives. It
        assists in <br /> taking necessary preparations required to study in
        foreign universities. It has a <br /> range of courses that help in
        developing personality skills, resume making,
        <br /> Standard Operating Procedures etc. In a nutshell, it gives an
        individual a<br /> holistic preparation required to set their foot in
        renowned universities across
        <br /> the world.
      </p>
    </SacMain>
  );
};

export default StudyAboardCourse;
