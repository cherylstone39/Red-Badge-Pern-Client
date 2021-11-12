import * as React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import loginImg from "../../components/assets/loginImg.jpeg";
import  "./Login.scss";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

interface LoginProps {
    updateToken: any;
}
 
interface LoginState {
    email: string;
    password: string;
}
 
class Login  extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { email: '', password: '' };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
            this.setState({  [e.target.name]:e.target.value} as unknown as LoginState);
            
        console.log(this.state)
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: any = {
            email: this.state.email,
            password: this.state.password,
            
        };

        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        
        }).then(
            (response) => response.json()
        ).then((response) => {
        this.props.updateToken(response.sessionToken)
            
               
        })
        .catch ((err) => {
            console.log(err)
            alert(`Email in use`)
        });

    }

    render() { 
        return(
            <Container>
                <Row>
                    <Col lg='4' md='6' sm='12'>

                    <div className='base-container'>
                <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <div className='content'>
                   <div className='image'>
                       <img src ={loginImg} alt='donuts'/>
                   </div>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' placeholder='email'
                            onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='text' name='password' placeholder='password'
                             onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type='submit' className='btn btn-primary btn-block'>Login</button>
                    <hr />
                    Need to create an account?  <a href="/register" >Register</a>
                </div>
                </form>
                        </div>




                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default Login ;
