import React from 'react';
import svg1 from './images/Grey.jpg';
import "./Articles.css";
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';

const Articles =()=>
{
    return (
        <>
          <div className="container-article">
          <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
          <p className="articletitle">Article Title</p>
          </div>
            
            <div className="row" style={{marginTop:"40px"}}>
            <div className="col-lg-12 d-flex justify-content-center"  style={{padding :"20px"}}>
        <Card style={{ width: '79rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25) ", borderRadius:" 10px" }}>
            <div className="cornerarticle d-flex justify-content-center">30 Jan</div>
        <Card.Img variant="top" className="greyarticle" src={svg1} />
        <Card.Body>
        <Card.Text className="articletext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, diam mattis aliquam nec phasellus interdum. Interdum fermentum eleifend viverra justo scelerisque. Leo massa eget dictumst mattis turpis. Diam venenatis pellentesque egestas tortor. Sed sem quam pharetra sed. Scelerisque sit malesuada nisl sollicitudin eu, consectetur diam commodo habitant. Dui scelerisque porttitor lorem curabitur. Turpis nibh tellus aliquet varius cras volutpat. Gravida vulputate quam in dis pretium tristique auctor. Nisl sit habitant auctor nibh lectus mi ultrices. Massa at at natoque vitae eget venenatis volutpat in platea. Egestas morbi gravida nulla risus euismod.
Scelerisque nunc tellus aliquet aliquam volutpat. Aliquet tristique tellus pellentesque purus imperdiet netus. Duis pellentesque ut pretium, egestas pretium. Pretium duis dolor ornare sapien nunc. In malesuada eget malesuada arcu pellentesque ipsum eu maecenas id. Molestie urna, tincidunt sed odio. Risus egestas aenean purus et vel eget dui. Faucibus tempus nisl aliquam dignissim penatibus non integer habitant enim. Sagittis ultrices suscipit id nibh blandit laoreet. Id sit feugiat nisl ultrices mollis ut.
Odio quis nisl vivamus turpis. Vel in duis dictum eget facilisi purus vitae et. Enim sit scelerisque faucibus vestibulum et condimentum. Et donec ipsum egestas ac, vitae dolor id et. Nisl, vel aliquam a gravida. In tristique adipiscing ultricies ut sed quam aliquam varius dis. 
    </Card.Text>
    <Button variant="warning" className="articlebutton">Read More</Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        </div>
        </>

    );
};

export default Articles;