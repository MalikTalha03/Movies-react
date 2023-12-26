import React from 'react'
import './css/topbar.css'

const Topbar = () => {
    if (document.cookie.split(';').filter((item) => item.includes('auth-token=')).length) {
        document.getElementById("initial").style.display = "none";
        document.getElementById("logged").style.display = "block";
    }
  return (
    <div>
        <h1>Movies Hub</h1>
        <div id = "initial">
            <button> Register </button>
            <button> Login </button>
        </div>
        <div id='logged'>
            <button> Logout </button>
        </div>
    </div>
  )
}

export default Topbar