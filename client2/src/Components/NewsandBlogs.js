import React from 'react';
import svg1 from './images/Grey.jpg';
import "./NewsandBlogs.css";
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';

const NewsandBlogs =()=>
{
    return (
        <div className="container-news">
          <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
          <p className="newsandblogs">News and Blogs</p>
          </div>
            
            <div className="row" style={{marginTop:"40px"}}>
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25) ", borderRadius:" 10px" }}>
            <div className="corner d-flex justify-content-center">30 Jan</div>
        <Card.Img variant="top" className="grey" src={svg1} />
        <Card.Body>
        <Card.Text className="newstext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.
    </Card.Text>
    <Button variant="warning" className="newsbutton">Read More</Button>
        </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)",borderRadius:" 10px"  }}>
        <div className="corner d-flex justify-content-center">30 Jan</div>
        <Card.Img variant="top" className="grey" src={svg1}  />
        <Card.Body>
        <Card.Text className="newstext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.
    </Card.Text>
    <Button variant="warning" className="newsbutton">Read More</Button>
        </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)",borderRadius:" 10px"  }}>
        <div className="corner d-flex justify-content-center">30 Jan</div>
        <Card.Img variant="top" className="grey" src={svg1}/>
        <Card.Body>
        <Card.Text className="newstext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.
    </Card.Text>
    <Button variant="warning" className="newsbutton">Read More</Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        <div className="row" style={{marginTop:"40px"}} >
        <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)",borderRadius:" 10px"  }}>
        <div className="corner d-flex justify-content-center">30 Jan</div>
        <Card.Img variant="top"  className="grey" src={svg1}  />
        <Card.Body>
        <Card.Text className="newstext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.
    </Card.Text>
    <Button variant="warning" className="newsbutton">Read More</Button>
        </Card.Body>
        </Card> 
            </div>
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
            <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)",borderRadius:" 10px"  }}>
            <div className="corner d-flex justify-content-center">30 Jan</div>
        <Card.Img variant="top" className="grey" src={svg1} />
        <Card.Body>
        <Card.Text className="newstext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.
    </Card.Text>
    <Button variant="warning" className="newsbutton">Read More</Button>
        </Card.Body>
        </Card> 
            </div>
            <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
                <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25)",borderRadius:" 10px"  }}>
                <div className="corner">30 Jan</div>
            <Card.Img variant="top" className="grey" src={svg1} />
            <Card.Body>
            <Card.Text className="newstext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.
    </Card.Text>
    <Button variant="warning" className="newsbutton">Read More</Button>
            </Card.Body>
            </Card> 
            </div>
        </div>
        </div>
    );
};
export default NewsandBlogs;
