import React from 'react'
import './css/topbar.css'
import { useEffect } from 'react'

const Topbar = () => {
    useEffect(() => {
        if (document.cookie.split(';').filter((item) => item.includes('auth-token=')).length) {
        document.getElementById('initial').style.display = 'none';
        document.getElementById('logged').style.display = 'block';
        } else {
        document.getElementById('initial').style.display = 'flex';
        document.getElementById('logged').style.display = 'none';
        }
    }, [])
    function logout() {
        document.cookie = 'auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/';
    }
  return (
    <div className='main'>
        <h1>Movies Hub</h1>
        <div className='init' id = "initial">
            <button onClick = {() => window.location.href = '/login'}> Login </button>
            <button onClick = {() => window.location.href = '/signup'}> Sign Up </button>
        </div>
        <div className="logged" id='logged'>
            <button onClick={logout}> Logout </button>
        </div>
    </div>
  )
}

export default Topbar