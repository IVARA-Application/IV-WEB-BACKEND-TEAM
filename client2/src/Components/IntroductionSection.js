import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import Arrow from "../img/arrow.svg";
import { Intro, Cards, ArlCard, EepCard, DoubtsCard } from "../styles";
import React from "react";
const IntroductionSection = () => {
  return (
    <Intro>
      <Cards>
        <ArlCard>
          <div className="icon">
            <img src={card1} alt="" />
          </div>
          <div className="arl-description">
            <p className="card-desc">
              Get Clarity education <br /> along with quality <br /> learning
            </p>
            <p className="short-desc">Augmented Really Learning</p>
            <img className="arrow" src={Arrow} alt="" />
          </div>
        </ArlCard>
        <EepCard>
          <div className="icon second">
            <img src={card2} alt="image" />
          </div>
          <div className="eep-description">
            <p className="card-desc">
              Get Prepared for <br /> your next big <br /> exam
            </p>
            <p className="short-desc">Entrance Exams Preparations</p>
            <img className="arrow" src={Arrow} alt="" />
          </div>
        </EepCard>
        <DoubtsCard>
          <div className="icon third">
            <img src={card3} alt="image" />
          </div>
          <div className="doubts-description">
            <p className="card-desc">
              We clarify your <br />
              doubts even at <br /> 3 AM
            </p>
            <p className="short-desc">24x7 Doubts Portal </p>
            <img className="arrow" src={Arrow} alt="" />
          </div>
        </DoubtsCard>
      </Cards>
    </Intro>
  );
};

export default IntroductionSection;
