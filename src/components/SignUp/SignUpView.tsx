import React from 'react';
import { SignUpViewProps } from './model';
import { Redirect, Link } from 'react-router-dom';

export const SignUpView: React.FC<SignUpViewProps> = (props) => {
    return (
        <div>
            <div>
                <h1>WebBook</h1>
                <p>Sign up to see posts and more from your friends.</p>
                <form className="">
                    <input type="text" placeholder="Mobile Number or Email" name="phoneOrEmail" onChange={props.handleChange} />
                    <input type="text" placeholder="Full Name" name="fullName" onChange={props.handleChange} />
                    <input type="text" placeholder="Username" name="username" onChange={props.handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={props.handleChange} />
                    <button>Sign up</button>
                </form>
                {/* <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy.</p> */}
            </div>
            <div>
                <p>Have an account? 
                    <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    )
}
