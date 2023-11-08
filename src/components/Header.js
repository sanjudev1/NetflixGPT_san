import React from 'react';
import { signOut } from 'firebase/auth';
import { Auth } from '../utlis/firebaseconfig/firebase';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router';
import { NETFLIX_LOGO, USER_AVATAR } from '../utlis/constants/constants';
import useOnAuthStateChange from '../utlis/hooks/useAuthStatechange';

const Header = () => {
  //on Authstate change custom hook
  useOnAuthStateChange();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(Auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };
  return (
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between w-full text-white">
      <div>
        <img src={NETFLIX_LOGO} alt="logo" className="h-14" />
      </div>
      {user && (
        <div className="flex">
          <img
            src={user?.photoURL}
            className="pr-32 rounded-sm"
            alt="dev_logo"
          />
          <img
            src={USER_AVATAR}
            alt="user_avatar"
            onClick={handleSignout}
            className="w-12 h-13 cursor-pointer rounded-xl"
          />
          <button onClick={handleSignout}>(Signout)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
