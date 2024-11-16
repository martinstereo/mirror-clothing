import { initializeApp } from "firebase/app";

import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAru-6Vl02WEsCTywA9zXkfxgnsKXhfxS8",
  authDomain: "mirror-clothing-db.firebaseapp.com",
  projectId: "mirror-clothing-db",
  storageBucket: "mirror-clothing-db.firebasestorage.app",
  messagingSenderId: "592357640508",
  appId: "1:592357640508:web:a206922e421412782d3639"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

console.log(firebaseApp.name)

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
