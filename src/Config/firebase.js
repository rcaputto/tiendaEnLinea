// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKuZJTBVOEW1wJlhTje0bWpaQEYjOh7Ug",
  authDomain: "vineria-d9eef.firebaseapp.com",
  projectId: "vineria-d9eef",
  storageBucket: "vineria-d9eef.appspot.com",
  messagingSenderId: "89816821598",
  appId: "1:89816821598:web:e61df8087f876e210fe9cf",
  measurementId: "G-G3NML5C9FT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;