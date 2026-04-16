// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // FIX: Added this import
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmedWUaQVTq_UQUa18a3mkwUxE8l3z31w",
  authDomain: "anshuman28102006.firebaseapp.com",
  projectId: "anshuman28102006",
  storageBucket: "anshuman28102006.firebasestorage.app",
  messagingSenderId: "183491178056",
  appId: "1:183491178056:web:7c6b917a5919231038327d",
  measurementId: "G-XBN7N01QWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// YOU NEED 'export const' HERE
export const db = getFirestore(app);
export const auth = getAuth(app);