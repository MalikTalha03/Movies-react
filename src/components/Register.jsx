import React from 'react'
import './css/register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  const api = 'http://localhost:8086/api/auth/register'
  function register() {
    const name = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const data = { name, password, email }
    fetch(api, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
  return (
    <div className='reg'>
        <h1>Register</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit" onClick={register}>Register</button>
        </form>
        <p>Already have an account?
            <Link to='/login'> Login</Link>
        </p>
    </div>
  )
}

export default Register