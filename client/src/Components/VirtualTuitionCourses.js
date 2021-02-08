import React from "react";
import vtc from "../img/VTC.png";
import { VtcMain } from "../styles";

const VirtualTuitionCourses = () => {
  return (
    <VtcMain>
      <div className="desc">
        <h1>Virtual Tuition Courses</h1>
      </div>
      <div className="vtc-con">
        <div className="vtc-left">
          <img className="vtc" src={vtc} alt="" />
        </div>
        <div className="vtc-right">
          <p>
            The new normal demands the safe <br /> education for students, and
            as well as for <br /> teachers. With IVARA virtual tuition doesn't
            <br /> only mean sitting in front of camera, but
            <br /> experiencing the 3D model in your own
            <br /> house. It includes the graphs, figures,
            <br /> diagrams and many more. No more back
            <br /> pain and eyes irritation. This will also make
            <br /> you education and fun learning-based
            <br /> teaching methods. The availability of tutors
            <br /> makes sure student's study goes smooth
            <br /> with less doubt.
          </p>
        </div>
      </div>
    </VtcMain>
  );
};

export default VirtualTuitionCourses;
