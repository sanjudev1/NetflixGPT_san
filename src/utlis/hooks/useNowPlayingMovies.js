import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addnowPlayingMovies } from '../slices/movieSlice';
import { NOW_PLAYING_MOVIES_API_1, OPTIONS } from '../constants/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const NowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_API_1, OPTIONS);
    const jsonres = await response.json();
    dispatch(addnowPlayingMovies(jsonres.results));
  };

  useEffect(() => {
    NowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
