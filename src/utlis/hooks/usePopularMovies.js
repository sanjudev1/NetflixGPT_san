import React, { useEffect } from 'react';
import { OPTIONS, POPULAR_MOVIES_API } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../slices/movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_API, OPTIONS);
    const jsonres = await response.json();
    dispatch(addPopularMovies(jsonres.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
