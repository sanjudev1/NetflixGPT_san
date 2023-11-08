import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="p-2">
      <h1 className="text-lg  text-white p-3">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie?.id}
              poster_path={movie?.poster_path}
              title={movie?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
