// Movie.js
import React from 'react';

function Movie({ movie }) {
  return (
    <div className="col mb-4">
      <div className="card h-100" style={{ borderColor: '#007bff' }}> {/* Customize the border color */}
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#007bff' }}>{movie.Title}</h5> {/* Title color */}
          <p className="card-text">{movie.Genre}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Movie;

