import { onAuthStateChanged } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Auth } from '../firebaseconfig/firebase';
import { useEffect } from 'react';
import { addUser, removeUser } from '../slices/userSlice';

const useOnAuthStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(addUser({ uid, email, photoURL, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    //cleaner function
    return () => unSubscribe();
  }, []);
};
export default useOnAuthStateChange;
