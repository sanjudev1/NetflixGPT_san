import React from 'react';
import Header from './Header';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useNowPlayingMovies from '../utlis/hooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
