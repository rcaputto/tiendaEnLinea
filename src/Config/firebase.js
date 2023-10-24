
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage'

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
const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app)

export default firebase;