
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './components/MoviesList';
import mov from './movies.json'


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(mov)
    setMovies (mov)
    
  }, []);


  return (
    <div className="container mt-5">
      {/* Title for the Movie Tracking System */}
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Movie Tracking System</h1>
        </div>
      </div>
      
      {/* Movies list component */}
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;

