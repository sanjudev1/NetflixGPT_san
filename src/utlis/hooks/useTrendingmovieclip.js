import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../constants/constants';
import { addTrendingClip } from '../slices/movieSlice';

const useTrendingmovieclip = (movieId) => {
  const dispatch = useDispatch();
  const getTrendingvideo = async () => {
    console.log(movieId);
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos';
    const response = await fetch(url, OPTIONS);
    const jsonres = await response.json();

    const filterdata = jsonres.results.filter(
      (video) => video.type === 'Trailer'
    );
    console.log(jsonres, filterdata);
    dispatch(
      addTrendingClip(filterdata.length > 0 ? filterdata[0] : jsonres[0])
    );
  };

  useEffect(() => {
    getTrendingvideo();
  }, []);
};

export default useTrendingmovieclip;
