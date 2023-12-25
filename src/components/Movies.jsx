import React from 'react'
import './css/movies.css'

const Movies = () => {
  return (
    <div className='movie'>
        <h1>Movies</h1>

        <div className="movie-container">
            <div className="movie-card">
                <img src="https://picsum.photos/200/300" alt="movie poster" />
                <h3>Movie Title</h3>
                <p>Author</p>
                <p>Release Date</p>
            </div>
        </div>
    </div>
  )
}

export default Movies