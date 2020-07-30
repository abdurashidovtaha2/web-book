import React from 'react'
import { LogInViewProps } from './model'
import { Redirect, Link } from 'react-router-dom'

export const LogInView: React.FC<LogInViewProps> = (props) => {
    return (
        <div>
            <div>
                <h1>WebBook</h1>
                <p>Sign up to see posts and more from your friends.</p>
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Phone number, username, or email"
                        onChange={props.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={props.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
            <div>
                <p>Don't have an account?
                    <Link to="/">Sign up</Link>
                </p>
            </div>
        </div>
    )
}