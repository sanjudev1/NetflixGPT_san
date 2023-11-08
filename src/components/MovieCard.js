import React from 'react';
import { IMAGE_URL } from '../utlis/constants/constants';

const MovieCard = ({ title, poster_path }) => {
  return (
    <div className="w-36 pr-2">
      <img src={IMAGE_URL + poster_path} alt="movie_poster" />
    </div>
  );
};

export default MovieCard;
