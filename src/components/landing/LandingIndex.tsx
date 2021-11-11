import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dessertrecipe from '../../components/assets/dessertrecipe.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Container >

            <div style={{textAlign: 'center'}}>
                <h1 style={{textAlign:'center', fontSize: '45px', fontWeight: 'bold', textShadow: '4px 3px 0px rgba(0,0,0,0), 3px 2px 0px rgba(0,0,0,0.2)'}}>Welcome to Sugar Shack Recipes</h1>
            </div>
            
                
                <br />
                <br />
            <Row>
                <Col lg='6'>
                <div className="card" style={{width: '18rem', justifyContent: 'center'}}>
  <img src={dessertrecipe}  className="card-img-top" alt="chocolate cake" />
  <div className="card-body">
    <h5 className="card-title">Chocolate Cake Is Great!</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" className="btn btn-primary">Recipes</Link>
  </div>
</div>
                </Col>
            </Row>
        </Container>

    )
}

export default Landing;
