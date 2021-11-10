import * as React from 'react';
import { Component } from 'react';
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
 
class Register extends React.Component<RegisterProps, RegisterState> {
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
        const data: any = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };

        fetch('http://localhost/user/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
                
            })
        
        }).then(
            (response) => response.json()
        ).then((response) => {
            if(response.data.user.sessionToken) {
                this.props.updateToken(data.user.sessionToken)
            
            }
                
        })
        .catch ((err) => {
            console.log(err)
            alert(`Email in use`)
        });

    }


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
                            <label htmlFor='role'>Baker</label><input type='checkbox' name='admin' placeholder='admin'  onChange={this.handleChange}
                             />
                            <label htmlFor='role'>User</label><input type='checkbox' name='user' placeholder='user' onChange={this.handleChange} />
                        </div>                        
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn btn-primary btn-block'>Register</button>
                    <hr />
                    {/* Already have an account?  <Link to="/login" >Login</Link> */}
                </div>
                </form>
            </div>
          );
    }
}
 
export default Register;
