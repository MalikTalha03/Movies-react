import React, { useEffect, useState } from 'react';
import './css/movies.css';
import Topbar from './Topbar';

const Movies = () => {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch('https://movies-api-ashen-seven.vercel.app/api/movies',
        {
          method: 'GET',
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
