// firebaseTabletConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const tabletConfig = {
    apiKey: "AIzaSyB8Ya_6k9m5dGgLXENkr3zcZCKviTqJsdI",
    authDomain: "tablet-service-d37a6.firebaseapp.com",
    projectId: "tablet-service-d37a6",
    storageBucket: "tablet-service-d37a6.firebasestorage.app",
    messagingSenderId: "641570257898",
    appId: "1:641570257898:web:f2564dd5fee33554a25093",
    measurementId: "G-PLD515GB9L"
  };

const tabletApp = initializeApp(tabletConfig, "tabletApp");
export const tabletDb = getFirestore(tabletApp);
