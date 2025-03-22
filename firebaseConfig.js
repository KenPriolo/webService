import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// 🔹 Firebase configuration for Advertisement Management
const firebaseConfig = {
  apiKey: "AIzaSyB8Ya_6k9m5dGgLXENkr3zcZCKviTqJsdI",
  authDomain: "tablet-service-d37a6.firebaseapp.com",
  projectId: "tablet-service-d37a6",
  storageBucket: "tablet-service-d37a6.firebasestorage.app",
  messagingSenderId: "641570257898",
  appId: "1:641570257898:web:f2564dd5fee33554a25093",
  measurementId: "G-PLD515GB9L"
};

// 🔹 Prevent multiple Firebase instances
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// 🔹 Firebase Services Initialization
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// 🔹 Analytics: Initialize only in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, storage, analytics };
