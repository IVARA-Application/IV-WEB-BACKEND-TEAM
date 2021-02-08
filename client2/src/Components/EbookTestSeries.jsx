import React from "react";
import "./EbookTestSeries.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const img = "./images/image.png";












const EbookTestSeries = () => {
  return (
    <>
      <div className="container-fluid big-container">
        <h1 className="heading">E-Books and E-Test Series</h1>
        <div className="container option">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
                <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5 className="studyClass">Class 4TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 5TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 6TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 7Th</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 8TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 9TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 10TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 11TH</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <div className="card  cardContainer">
              <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5  className="studyClass">Class 12TH</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EbookTestSeries;
