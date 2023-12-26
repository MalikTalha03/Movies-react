import React, { useEffect, useState } from 'react';
import './css/movies.css';
import Topbar from './Topbar';

const Movies = () => {
  if (!document.cookie.split(';').filter((item) => item.includes('auth-token=')).length) {
    window.location.href = '/login';
  }
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let cookieval = document.cookie.split(';');
      let cookies = {}

      for (let i=0; i<cookieval.length; i++) {
        let cookie = cookieval[i].split('=');
        cookies[cookie[0].trim()] = cookie[1];
      }
      let authcookie = cookies['auth-token']; 
      try {
        const response = await fetch('http://localhost:8086/api/movies',
        {
          method: 'GET',
          headers: {
            'Authorization':  authcookie,
          },
        }
        
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const base64toImg = (base64) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const loadImages = async () => {
    const moviesWithImages = await Promise.all(
      movies.map(async (movie) => {
        const img = await base64toImg(movie.poster);
        return { ...movie, imgSrc: img.src };
      })
    );
    setMovies(moviesWithImages);
  };

  useEffect(() => {
    loadImages();
  }, [movies]);

  return (
    <div>
      <Topbar />
      <div className="movie">
        <div className="movie-container">
          {movies.map((movie) => (
            <div className="movie-card" key={movie._id}>
              <img src={movie.imgSrc} alt={movie.name} />
              <h2>{movie.name}</h2>
              <p>Year: {movie.year}</p>
              <p>Director: {movie.producer}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
