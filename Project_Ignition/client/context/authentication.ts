import { type Auth } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.config';
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const FirebaseContext = React.createContext<Auth>(auth);