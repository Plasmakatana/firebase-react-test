// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPRSyIBLr866qUGnaqeUxUovMBcRKJ18I",
  authDomain: "react-test-265c5.firebaseapp.com",
  projectId: "react-test-265c5",
  storageBucket: "react-test-265c5.appspot.com",
  messagingSenderId: "481777086146",
  appId: "1:481777086146:web:99b56f8e8f43512b37155b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
