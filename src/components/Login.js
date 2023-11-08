import React, { useRef } from 'react';
import Header from './Header';
import { useState } from 'react';
import FormdataValidation from '../utlis/validations/FormValidation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Auth } from '../utlis/firebaseconfig/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utlis/slices/userSlice';
import { BG_LOGO, DEV_AVATAR } from '../utlis/constants/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [islogin, setlogin] = useState(true);
  const [errormsg, seterrmsg] = useState('');

  const handletoggleForm = () => {
    setlogin((prev) => !prev);
  };

  const handleFormsubmission = () => {
    const ValidationRes = FormdataValidation(
      Email.current.value,
      Password.current.value
    );
    seterrmsg(ValidationRes);

    if (ValidationRes) return;

    if (!islogin) {
      //sign up user
      createUserWithEmailAndPassword(
        Auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: Firstname.current.value,
            photoURL: DEV_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = Auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrmsg(errormsg);
            });

          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        Auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = Auth.currentUser;

          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorMessage);
        });
    }
  };

  const Email = useRef(null);
  const Password = useRef(null);
  const Firstname = useRef(null);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_LOGO} alt="bg_logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white rounded-md bg-opacity-70"
      >
        <h1 className="font bold text-3xl py-4">
          {islogin ? 'Sign In' : 'Sign Up'}
        </h1>
        {!islogin && (
          <>
            <input
              type="text"
              placeholder="FirstName"
              ref={Firstname}
              className="p-2 my-2 w-full bg-gray-950"
            />
            <input
              type="text"
              placeholder="LastName"
              className="p-2 my-2 w-full bg-gray-950"
            />
          </>
        )}

        <input
          type="text"
          placeholder="Email Address"
          ref={Email}
          className="p-2 my-2 w-full bg-gray-950"
        />
        <input
          type="password"
          placeholder="Password"
          ref={Password}
          className="p-2 my-2 w-full bg-gray-950"
        />
        <button
          className="p-4 my-4 bg-red-700 rounded-md w-full"
          onClick={handleFormsubmission}
        >
          {islogin ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="text-red-900">{errormsg}</p>
        <p className="text-xl bold cursor-pointer" onClick={handletoggleForm}>
          {islogin
            ? 'New to Netflix? Sign up now'
            : 'Already Registred? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
