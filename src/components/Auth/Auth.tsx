import * as React from 'react';
import { Component } from 'react';
import './Auth.scss';
import { Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';


const Auth = (props: any) => {
    return (
        <Container>
                <Row>
                    <Col md='6'>
                        <Register  updateToken={props.setToken} />
                    </Col>
                    <Col md='6'>
                        <Login  updateToken={props.setToken}  />
                    </Col>
                </Row>
            </Container>

    )
}

export default Auth;
