import React from "react";
import svg3 from "./images/girl.jpg";
import svg4 from "./images/childrens.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Middle.css';
const SectionFour = () => {
  return (
    <React.Fragment>
     <div class="firstSection container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <h1 class="big-heading">Stuck in life or stuck in your career ???</h1>
        <img class="img-1 mx-auto d-block" src={svg3} alt="" srcset="" />
        <h1 class="big-heading">
          We help you overcome the mental block in your life
        </h1>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6">
        <img class="img-2 mx-auto d-block" src={svg4} alt=""
          srcset="" />
        <h1 class="big-heading mx-auto">
          Join our Initiative called as HealMyMind
        </h1>
        <button type="button" class=" btn-light btn-lg mx-auto d-block">
          Book Now! IT’s FREEE
        </button>
      </div>
    </div>
  </div>
    </React.Fragment>
  );
};

export default SectionFour;