import React from "react";
import Header from "./Header";
import svg1 from "./images/mobileBoy.svg";
import svg2 from "./images/bird.svg";


const Home = () => {
  
  return (
    <div>
      <Header />
      <section className="banner-area relative" id="home">
        <div className="container">
          <div className="overlay overlay-bg"></div>
          <div className="row fullscreen d-flex align-items-center justify-content-start">
            <div className="banner-content col-lg-6 col-md-12 col-sm-12">
              <h2 className="text-uppercase">
                Ivara <img className="bird" src={svg2} style={{marginBottom:"40px" }} /> </h2>
                <br></br>
                <h3>IVentors Augmented Reality Arena, is a “One Platform for Complete School Ecosystem” through AR Technology for Schools. IVARA Classes, the future of education, makes learning innovative and easy to understand. It makes the strenuous concepts simple and boring lectures interesting.  

                </h3>
              <br></br><br></br>
              <div className="row justify-content-between"> 
              <button
                  className="form-btn"
                  style={{borderRadius: "10px",height: "45px", backgroundColor:"#105af6" , marginTop:"10px", marginLeft:"10px"}}>
                  Explore More
                </button></div>
             <div className="row justify-content-between"></div>
            </div>
            <div className="col-lg-6 d-none d-xs-none d-sm-none d-md-none d-lg-block" style={{overflow:"none"}}>
              <img src={svg1}  style={{height:"95%",width:"95%",marginLeft:"280px"}} />       </div>
          </div>
          </div>
      </section>

    </div>
  );
};

export default Home;







