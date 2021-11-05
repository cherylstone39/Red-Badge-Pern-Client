import * as React from 'react';
import { Component } from 'react';
import pie from "../../components/assets/pie.jpg";
import "./Register.scss"


interface RegisterProps {
    name?: any;
    value?: any;
}
 
interface RegisterState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
      
}
 
class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        const initialState ={
            firstName : '',
            lastName : '',
            email: '',
            password: '',
           
        }
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e: any) => {
        e.preventDefault();
        const {name, value } = e.target;
        this.setState({ [name]: value });
        console.log(this.state)
    }
    handleSubmit = (event :any) => {}


    render() { 
        return (
            <div className='base-container'>
                <form onSubmit={this.handleSubmit}>
                <div className='header'>Register</div>
                <div className='content'>
                <div className='image'>
                       <img src ={pie} alt='pie'/>
                   </div>
                   
                    <div className='form'>
                    <div className='form-group'>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' name='firstName' placeholder='firstName'
                            onChange={this.handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' name='lastName' placeholder='lastName'
                            onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' placeholder='email'
                             onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='text' name='password' placeholder='password' 
                             onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='role'>Baker</label><input type='checkbox' name='admin' placeholder='admin'/>
                            <label htmlFor='role'>User</label><input type='checkbox' name='user' placeholder='user'/>
                        </div>                        
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn btn-primary btn-block'>Register</button>
                    <hr />
                    Already have an account?  <a href="/login" >Login</a>
                </div>
                </form>
            </div>
          );
    }
}
 
export default Register;
