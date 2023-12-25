import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an Account yet? 
            <Link to='/signup'> Sign Up</Link>
        </p>
    </div>
  )
}

export default Login