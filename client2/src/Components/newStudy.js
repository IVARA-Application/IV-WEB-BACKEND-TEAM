import card1 from "./images/course.svg";
import card2 from "./images/news.svg";
import card3 from "./images/scholarships.svg";
import React from "react";
import "./studyabroad.css";

const StudyAbroad = () => {
  return (
    <>
    <div className="container-study">
      <div className="d-flex justify-content-center mt-2">
      <h1 className="headingstudy">Study Abroad Preparation</h1>
      </div>
        <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center mt-5">
            <div className="rect1 ">
            <img src={card1} alt="" srcset="" />
            <h2>Courses</h2>
            </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center mt-5">
            <div className="rect2">
            <img src={card2}></img>
            <h2>News & Blogs</h2>
            </div> 
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center mt-2">
            <div className=" rect3">
            <img src={card3}></img>
            <h2>Scholarships</h2>
            </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default StudyAbroad;
