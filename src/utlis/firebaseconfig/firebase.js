// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6_GWMOi55d59leeEl5pylrsVWrUQrE4Y',
  authDomain: 'sanjunetflixgpt-c2d05.firebaseapp.com',
  projectId: 'sanjunetflixgpt-c2d05',
  storageBucket: 'sanjunetflixgpt-c2d05.appspot.com',
  messagingSenderId: '643642027989',
  appId: '1:643642027989:web:360796a480f848121b975c',
  measurementId: 'G-YQXNMF1XMN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();
