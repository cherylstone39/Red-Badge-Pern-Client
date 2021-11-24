import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import { Redirect } from 'react-router-dom'
import cklog from '../assets/cklog.jpg';


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
       
        return ( 
            <div>
            <h1 style={{textAlign:'center', fontSize: '45px', fontWeight: 'bold', textShadow: '4px 3px 0px rgba(0,0,0,0), 3px 2px 0px rgba(0,0,0,0.2)'}}>Welcome to Sugar Shack Recipes</h1>
            <br/>
            <img src={cklog}  style={{justifyContent: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} height='175' width='350' alt="logo" />
        
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
        </div>
            )
        
    }
}
 
export default Auth;
