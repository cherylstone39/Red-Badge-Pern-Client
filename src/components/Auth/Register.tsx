import * as React from 'react';
import pie from "../../components/assets/pie.jpg";
import "./Register.scss"


const Register = () =>  {

    
           return(
            <div className='base-container'>
                <div className='header'>Register</div>
                <div className='content'>
                <div className='image'>
                       <img src ={pie} alt='pie'/>
                   </div>
                   
                    <div className='form'>
                    <div className='form-group'>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' name='firstName' placeholder='firstName'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' name='lastName' placeholder='lastName'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' placeholder='email'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='text' name='email' placeholder='email'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='role'>Baker</label>
                            <input type='checkbox' name='admin' placeholder='admin'/>
                            <label htmlFor='role'>User</label>
                            <input type='checkbox' name='user' placeholder='user'/>
                        </div>                        
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn'>Register</button>
                    <hr />
                    Already have an account?  <a href="/login" >Login</a>
                </div>
            </div>
        )
    }

    export default Register;
