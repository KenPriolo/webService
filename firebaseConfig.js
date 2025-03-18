import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// 🔹 Firebase configuration for Advertisement Management
const firebaseConfig = {
  apiKey: "AIzaSyAraoE97AyKWfCWrtC7iXFhUys3SnXB7do",
  authDomain: "advertisementmanagement-2ffcd.firebaseapp.com",
  projectId: "advertisementmanagement-2ffcd",
  storageBucket: "advertisementmanagement-2ffcd.firebasestorage.app", // ✅ Fixed storageBucket URL
  messagingSenderId: "202528285414",
  appId: "1:202528285414:web:cf3f76bcfd2cca5b39d127",
  measurementId: "G-DN76N01VCY"
};

// 🔹 Prevent multiple Firebase instances
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// 🔥 Only initialize analytics in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, storage, analytics };
