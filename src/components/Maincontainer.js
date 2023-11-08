import React from 'react';
import VideoTitle from './VideoTitle';
import TrendingVideo from './TrendingVideo';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../utlis/hooks/useNowPlayingMovies';

const Maincontainer = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <TrendingVideo movieId={id} />
    </div>
  );
};

export default Maincontainer;
