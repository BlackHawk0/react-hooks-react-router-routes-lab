import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList =  movies.map(movie => {
    return (
    <div key={movie.title}>
    <p>Title: {movie.title}</p>
    <p>Time: {movie.time}</p>
    <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
    </div>
    )}
  );
  return(
    <div>
      <h1>Movies Page</h1> 
      <div>{movieList}</div>
    </div>
  )
}

export default Movies;
