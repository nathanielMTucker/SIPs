// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBFrXgsCgfALSjEQPbodeBd7bpZeOM5sQw",
  authDomain: "ignition-a826c.firebaseapp.com",
  projectId: "ignition-a826c",
  storageBucket: "ignition-a826c.appspot.com",
  messagingSenderId: "839178793890",
  appId: "1:839178793890:web:3ceec5b234f5d48dcb78fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);