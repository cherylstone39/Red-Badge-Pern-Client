import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';


const Auth = (props: any) => {
    // if(updateToken === localStorage){
    //     return(<LandingsIndex />){
    // }else {
    //     (<Auth />)
    // }
    // }
    return (
        <Container>
                <Row>
                    <Col md='6'>
                        <Register  updateToken={props.updateToken} />
                    </Col>
                    <Col md='6'>
                        <Login  updateToken={props.updateToken}  />
                    </Col>
                </Row>
            </Container>

    )
}

export default Auth;
