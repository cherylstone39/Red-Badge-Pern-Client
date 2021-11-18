import * as React from 'react';
import { Component } from 'react';
import { Form, Col, Row, Button  } from 'react-bootstrap'
import pie from "../../components/assets/pie.jpg";
import "./Register.scss"
import { Link } from 'react-router-dom';



interface RegisterProps {
   updateToken: any;
}
 
interface RegisterState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
      
}
 
class Register extends Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
       this.state = {firstName: '', lastName: '', email: '', password: '', role: ''}
        
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
            this.setState({  [e.target.name]:e.target.value} as unknown as RegisterState);
            
        console.log(this.state)
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
            firstName, 
            lastName,
            email,
            password,
            role
        } = this.state

        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                
            })
        
        }).then(
            (response) => response.json()
        ).then((response) => {
            this.props.updateToken(response.sessionToken)
                       
                
        })
        .catch ((err) => {
            console.log(err)
            // alert(`Email in use`)
        });

    }


    render() { 
        return (
            <Form onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <br/>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridfirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="firstName" name='firstName' placeholder="firstName" onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridlastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="lastName" name='lastName' placeholder="lastName" onChange={this.handleChange}/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type='email' placeholder="email" name='email' onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type='password' placeholder="password" name='password' onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" id="formGridBaker">
    <Form.Check type="checkbox" name='admin' label="Baker" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" id="formGridUser">
    <Form.Check type="checkbox" name='user' label="User" onChange={this.handleChange}/>
  </Form.Group>

  <div className='footer'>
     <button type='submit' className='btn btn-primary btn-block'>Register</button>
        <hr />
        Already have an account?  <a href="/login" >Login</a>
 </div>
</Form>
            // <div className='base-container'>
            //     <form onSubmit={this.handleSubmit}>
            //     <div className='header'>Register</div>
            //     <div className='content'>
            //     {/* <div className='image'>
            //            <img src ={pie} alt='pie'/>
            //        </div> */}
                   
            //         <div className='form'>
            //         <div className='form-group'>
            //                 <label htmlFor='firstName'>First Name</label>
            //                 <input type='text' name='firstName' placeholder='firstName'
            //                 onChange={this.handleChange} />
            //             </div>
            //             <div className='form-group'>
            //                 <label htmlFor='lastName'>Last Name</label>
            //                 <input type='text' name='lastName' placeholder='lastName'
            //                 onChange={this.handleChange}/>
            //             </div>
            //             <div className='form-group'>
            //                 <label htmlFor='email'>Email</label>
            //                 <input type='text' name='email' placeholder='email'
            //                  onChange={this.handleChange}/>
            //             </div>
            //             <div className='form-group'>
            //                 <label htmlFor='password'>Password</label>
            //                 <input type='text' name='password' placeholder='password' 
            //                  onChange={this.handleChange}/>
            //             </div>
            //             <div className='form-group'>
            //                 <label htmlFor='role'>Baker</label>
            //                 <input type='checkbox' name='admin' placeholder='admin'  onChange={this.handleChange}
            //                  />
            //                 <label htmlFor='role'>User</label>
            //                 <input type='checkbox' name='user' placeholder='user' onChange={this.handleChange} />
            //             </div>                        
            //         </div>
            //     </div>
            //     <div className='footer'>
            //         <button type='submit' className='btn btn-primary btn-block'>Register</button>
            //         <hr />
            //         Already have an account?  <a href="/login" >Login</a>
            //     </div>
            //     </form>
            // </div>
          );
    }
}
 
export default Register;
