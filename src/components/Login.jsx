import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'


const Login = () => {
  if (document.cookie.split(';').filter((item) => item.includes('auth-token=')).length) {
    window.location.href = '/movies';
  }
const api = 'http://localhost:8086/api/auth/login'
  async function login(event) {
    event.preventDefault();
    try {
      console.log('Login')
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const data = { email, password };
      const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        new Cookies().set('auth-token', data.token);
        window.location.href = '/movies';
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit" onClick={(e) => login(e)}>Login</button>
        </form>
        <p>Don't have an Account yet? 
            <Link to='/signup'> Sign Up</Link>
        </p>
    </div>
  )
}

export default Login