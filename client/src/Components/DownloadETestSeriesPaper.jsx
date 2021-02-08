import React from "react";
import { Col, Row } from "react-bootstrap";
import "./DownloadPaper.css";








const styles = {
  grid: {
      paddingLeft: 0,
      paddingRight: 0
  },
  row: {
      marginLeft: 0,
      marginRight: 0
  },
  col: {
      paddingLeft: 0,
      paddingRight: 0
  }
};


const DownloadETestSeriesPaper = () => {
  return (
    <>
      <div className="conatiner-fluid main-container" style={styles.grid}>
        <Row style={styles.row}>
          <Col lg-12 className="eBooks">
            <div className="conatiner-fluid">
              <Row style={styles.row}>
                <Col lg={4} md={4} xs={4} style={styles.col}>
                  <p className="sub-heading ">Class 4</p>
                </Col>
                <Col lg={4} md={4} xs={4}>
                  <p className="unactive">
                    E books <span className="arrow"></span>
                  </p>
                </Col>
                <Col lg={4} md={4} xs={4} style={styles.col}>
                  <p >Test Series<span className="arrow"></span></p>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col lg={4} xs={4} style={styles.col}>
                  <ul className="subject">
                    <li className="subjectName">Physics</li>
                    <li className="subjectName">Chemistrty</li>
                    <li className="subjectName">Mathematics</li>
                    <li className="subjectName">English</li>
                  </ul>
                </Col>
                <Col lg={5}  xs={8} style={styles.col}>
                  <ul className="book-container">
                    <li className="books">E-Test Series</li>
                    <li className="books">E-Test Series</li>
                    <li className="books">E-Test Series</li>
                    <li className="books">E-Test Series</li>
                  </ul>
                </Col>
              
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default DownloadETestSeriesPaper;
