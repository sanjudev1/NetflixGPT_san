import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import usePopularMovies from '../utlis/hooks/usePopularMovies';
import useServingMovies from '../utlis/hooks/useServingMovies';
import {
  NOW_PLAYING_MOVIES_API_2,
  NOW_PLAYING_MOVIES_API_3,
  NOW_PLAYING_MOVIES_API_4,
  NOW_PLAYING_MOVIES_API_5,
} from '../utlis/constants/constants';

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movie);
  usePopularMovies();
  useServingMovies({ name: 'nowPlaying_2', api_url: NOW_PLAYING_MOVIES_API_2 });
  useServingMovies({ name: 'nowPlaying_3', api_url: NOW_PLAYING_MOVIES_API_3 });
  useServingMovies({ name: 'nowPlaying_4', api_url: NOW_PLAYING_MOVIES_API_4 });
  useServingMovies({ name: 'nowPlaying_5', api_url: NOW_PLAYING_MOVIES_API_5 });

  return (
    <div className="bg-black w-screen">
      <div className="">
        <MovieList title={'Popular movies'} movies={movies?.popularMovies} />
        <MovieList
          title={'Horror Movies'}
          movies={movies?.allCategoryMovies?.nowPlaying_2}
        />
        <MovieList
          title={'Friction Movies'}
          movies={movies?.allCategoryMovies?.nowPlaying_3}
        />
        <MovieList
          title={'Comedy Movies'}
          movies={movies?.allCategoryMovies?.nowPlaying_4}
        />
        <MovieList
          title={'Documentry Web series'}
          movies={movies?.allCategoryMovies?.nowPlaying_5}
        />
      </div>
    </div>
  );
};

export default Secondarycontainer;
