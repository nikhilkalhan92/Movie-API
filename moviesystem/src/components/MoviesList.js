import React, { useState } from 'react';
import Movie from './Movie';
import movies from '../movies.json';

function MoviesList() {
  const [query, setQuery] = useState('');

  const filteredMovies = movies.filter(movie => {
    // Check if movie.Title is a string and query is not empty
    if (typeof movie.Title === 'string' && query) {
      return movie.Title.toLowerCase().includes(query.toLowerCase());
    }
    // If query is empty, return all movies
    return !query;
  });

  return (
    <div>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="row row-cols-1 row-cols-md-4 g-4"> {/* Adjust for 4 columns */}
        {filteredMovies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
