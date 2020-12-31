import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyB0PhhWk4MB73EYbNaLiP9ejZNeQ609lVE",
  authDomain: "note-writer-e5edd.firebaseapp.com",
  projectId: "note-writer-e5edd",
  storageBucket: "note-writer-e5edd.appspot.com",
  messagingSenderId: "701456106634",
  appId: "1:701456106634:web:e0db7419ad60b050941973",
  measurementId: "G-8MP1PC22Q4"
};

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore();

export const auth = firebase.auth();
