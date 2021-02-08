import { Entrance } from "../styles";
import React from "react";
import arrow from "../img/arrow.png";
import entrance from "../img/entrance.png";

const EntranceExamCourses = () => {
  return (
    <Entrance>
      <h1>Entrance Exams Courses</h1>
      <p>
        This initiative helps students to crack the entrance exams in <br />
        various fields. Students learn concepts from basics and also <br /> get
        tricks to solve various difficult questions. Students <br /> aspiring
        for JEE, NEET or any other preparation can get all <br /> courses now at
        IVARA Mobile Application.
      </p>
      <img src={arrow} alt="" />
      <div>
        <img className="girl" src={entrance} alt="" />
      </div>
    </Entrance>
  );
};

export default EntranceExamCourses;
