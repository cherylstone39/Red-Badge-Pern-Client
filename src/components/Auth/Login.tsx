import * as React from 'react';
import loginImg from "../../components/assets/loginImg.jpeg";
import  "./Login.scss";

const Login = () => {

           return(
            <div className='base-container'>
                <div className='header'>SugarShack Recipe App</div>
                <div className='content'>
                   <div className='image'>
                       <img src ={loginImg} alt='donuts'/>
                   </div>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' placeholder='email'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='text' name='password' placeholder='password'/>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn'>Login</button>
                    <hr />
                    Need to create an account?  <a href="/register" >Register</a>
                </div>
            </div>
        )
    }

    export default Login;
