import React from 'react';

import useTrendingmovieclip from '../utlis/hooks/useTrendingmovieclip';
import { useSelector } from 'react-redux';

const TrendingVideo = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movie?.trendingMovieClip);

  useTrendingmovieclip(movieId);

  if (!movieTrailer) return;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          'https://www.youtube.com/embed/' +
          movieTrailer?.key +
          '?autoplay=1&mute=1'
        }
        title="Popular Video Clip"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share autoplay"
      ></iframe>
    </div>
  );
};

export default TrendingVideo;
