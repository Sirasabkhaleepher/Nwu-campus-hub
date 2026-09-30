// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGeRhDoDdJzxpyuo7zHg0L50D1Cc6jNmg",
  authDomain: "nwu-campus-hub.firebaseapp.com",
  projectId: "nwu-campus-hub",
  storageBucket: "nwu-campus-hub.firebasestorage.app",
  messagingSenderId: "1085860624193",
  appId: "1:1085860624193:web:368c85ba431d99ee2293c0",
  measurementId: "G-Z0TG2PSNVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
