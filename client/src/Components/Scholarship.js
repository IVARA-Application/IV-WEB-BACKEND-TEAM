import React from 'react';
import svg1 from './images/university.svg';
import "./Scholarship.css";
import Card from 'react-bootstrap/Card';

const Scholarship =()=>
{
    return (
        <div className="container-scholar">
          <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
          <p className="scholarship">Scholarships</p>
          </div>
            
            <div className="row" style={{marginTop:"40px"}}>
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)" }}>
        <Card.Img variant="top" className="photo d-block mx-auto img-fluid w-50 mt-3"src={svg1} />
        <Card.Body>
            <Card.Title className="t1" style={{marginTop : "10px"}} >University Name</Card.Title>
        </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)" }}>
        <Card.Img variant="top" className="photo d-block mx-auto img-fluid w-50 mt-3" src={svg1}  />
        <Card.Body>
            <Card.Title className="t1" style={{marginTop : "10px"}} >University Name</Card.Title>
        </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)" }}>
        <Card.Img variant="top" className="photo d-block mx-auto img-fluid w-50 mt-3" src={svg1}/>
        <Card.Body>
            <Card.Title className="t1" style={{marginTop:"10px"}}>University Name</Card.Title>
        </Card.Body>
        </Card>
        </div>
        </div>
        <div className="row" style={{marginTop:"40px"}} >
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
            <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)" }}>
        <Card.Img variant="top"  className="photo d-block mx-auto img-fluid w-50 mt-3" src={svg1}  />
        <Card.Body>
            <Card.Title className="t1">University Name</Card.Title>
        </Card.Body>
        </Card> 
            </div>
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
            <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)" }}>
        <Card.Img variant="top"  className="photo d-block mx-auto img-fluid w-50 mt-3" src={svg1} />
        <Card.Body>
            <Card.Title className="t1">University Name</Card.Title>
        </Card.Body>
        </Card> 
            </div>
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
                <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)" }}>
            <Card.Img variant="top"  className="photo d-block mx-auto img-fluid w-50 mt-3" src={svg1} />
            <Card.Body>
                <Card.Title className="t1">University Name</Card.Title>
            </Card.Body>
            </Card> 
            </div>
        </div>
        </div>
    );
};
export default Scholarship;
