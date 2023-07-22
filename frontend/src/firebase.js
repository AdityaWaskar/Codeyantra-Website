// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt8DGt8PbgAQaHXiaXa6tEQyzmLFT8qPs",
  authDomain: "codeyantra-bf977.firebaseapp.com",
  projectId: "codeyantra-bf977",
  storageBucket: "codeyantra-bf977.appspot.com",
  messagingSenderId: "816433692972",
  appId: "1:816433692972:web:0b853569e4db078633ac89",
  measurementId: "G-JBRECNEEPN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
