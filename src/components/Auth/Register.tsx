import * as React from 'react';
import { Component } from 'react';

export class Register extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className='base-content'>
                <div className='header'>Register</div>
                <div className='content'>
                   
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
                            <label htmlFor='role'>Baker or User</label>
                            <input type='checkbox' name='user' placeholder='user'/>
                            <input type='checkbox' name='admin' placeholder='admin'/>
                        </div>                        
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn'>Register</button>
                </div>
            </div>
        )
    }
}
