import React from "react";
import girl from "../img/entrance.png";
import arrow from "../img/arrow.png";
import books from "../img/books.png";
import { PypContainer } from "../styles";

const PreviousYearSection = () => {
  return (
    <div>
      <PypContainer>
        <div className="img">
          <img className="girl1" src={girl} alt="" />
        </div>
        <div className="description">
          <h1>Previous Year papers</h1>
          <p>
            We offer a wide range of previous year <br /> papers and sample
            papers for classes <br />
            4-12
          </p>
          <img src={arrow} alt="" />
        </div>
      </PypContainer>
      <PypContainer>
        <div className="img">
          <img className="books" src={books} alt="" />
        </div>
        <div className="description">
          <h1>Previous Year papers</h1>
          <p>
            We have a vast range of E-books and <br /> E-test series for all
            subjects of classes <br /> 4-12
          </p>
          <img src={arrow} alt="" />
        </div>
      </PypContainer>
    </div>
  );
};

export default PreviousYearSection;
