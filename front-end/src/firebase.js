// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVO477yrsHlkikFX68t2ryMDG-WMMTgxM",
  authDomain: "portfolio-mails-fe4aa.firebaseapp.com",
  projectId: "portfolio-mails-fe4aa",
  storageBucket: "portfolio-mails-fe4aa.firebasestorage.app",
  messagingSenderId: "352257747697",
  appId: "1:352257747697:web:ac1c77326d4a59601a9750",
  measurementId: "G-K4H7ZT0Q50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db};