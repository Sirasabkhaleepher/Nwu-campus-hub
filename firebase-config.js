// Your Firebase config for NWU Campus Hub
const firebaseConfig = {
  apiKey: "AIzaSyDGeRhDoDdJzxpyuo7zHg0L50D1Cc6jNmg",
  authDomain: "nwu-campus-hub.firebaseapp.com",
  projectId: "nwu-campus-hub",
  storageBucket: "nwu-campus-hub.firebasestorage.app",
  messagingSenderId: "1085860624193",
  appId: "1:1085860624193:web:368c85ba431d99ee2293c0",
  measurementId: "G-Z0TG2PSNVN"
};

// Initialize Firebase (compat version for website)
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  console.log("Firebase Connected!");
} else {
  console.error("Firebase SDK not loaded yet");
}
