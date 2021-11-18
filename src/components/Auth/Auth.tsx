import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import { Redirect } from 'react-router-dom'


interface AuthProps {
    updateToken: any;
}
 
interface AuthState {
    isLoginActive: boolean;
}
 
class Auth extends Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {isLoginActive: true};
    }
    render() { 
        const { isLoginActive } = this.state;
        // const current = isLoginActive ? 'Register' : 'Login';
        // const currentActive = isLoginActive ? 'login' : 'register'
        return ( 
             
                <Container>
                        <Row>
                            <Col md='6'>
                              
                                <Login updateToken={this.props.updateToken}  />
                           
                            </Col>
                            <Col md='6'>
                                {/* {!isLoginActive && ( */}
                                <Register  updateToken={this.props.updateToken} />
                                {/* )} */}
                            </Col>
                        </Row>{/*button*/}
                    </Container>
        
            )
        
    }
}
 
export default Auth;
