import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwedJvnnE3wx8q_EuB8WvJIeTLCYb7dHs",
  authDomain: "auadstri.firebaseapp.com",
  projectId: "auadstri",
  storageBucket: "auadstri.appspot.com", // ✅ Fixed storageBucket
  messagingSenderId: "973171137986",
  appId: "1:973171137986:web:3c8fbc44cdcc420f4f0a5b",
  measurementId: "G-BWH0YNQ3NJ"
};

// Prevent multiple Firebase instances
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
