import React, { useEffect, useState } from 'react';
import './css/movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://movies-api-dh9c.vercel.app/api/movies/');
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
    <div className="movie">
      <h1>Movies</h1>

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
  );
};

export default Movies;
