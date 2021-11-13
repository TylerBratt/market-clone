import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB5DSx1M5vuA2tk3GCjAtws9jFMd7lPkRI",
  authDomain: "market-clone.firebaseapp.com",
  projectId: "market-clone",
  storageBucket: "market-clone.appspot.com",
  messagingSenderId: "127289513329",
  appId: "1:127289513329:web:b97e2f3d7d716404bb92d0",
  measurementId: "G-HND3Q9R5F8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;