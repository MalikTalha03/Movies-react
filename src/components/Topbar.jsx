import React from 'react'
import './css/topbar.css'
import { useEffect } from 'react'
import AddMovie from './AddMovie'
import Popup from 'reactjs-popup'


const Topbar = () => {
  return (
    <div className='main'>
        <h1>Movies Hub</h1>
        <div className="logged" id='logged'>
        <Popup trigger={<button> Add Movie</button>} position={"bottom center"}><AddMovie /></Popup>
        </div>
    </div>
  )
}

export default Topbar
