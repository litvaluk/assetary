import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "assetary.firebaseapp.com",
  projectId: "assetary",
  storageBucket: "assetary.appspot.com",
  messagingSenderId: "729222149495",
  appId: "1:729222149495:web:6b116ff50e4284a843dd72"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;