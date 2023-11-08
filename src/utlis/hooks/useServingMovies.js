import React, { useEffect } from 'react';
import { OPTIONS } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { addAllCategoryMovies } from '../slices/movieSlice';

const useServingMovies = ({ name, api_url }) => {
  console.log(name, 'name');
  const dispatch = useDispatch();
  const getAllMovies = async () => {
    const response = await fetch(api_url, OPTIONS);
    const jsonres = await response.json();
    dispatch(addAllCategoryMovies({ name: name, value: jsonres.results }));
  };
  useEffect(() => {
    getAllMovies();
  }, []);
};

export default useServingMovies;
