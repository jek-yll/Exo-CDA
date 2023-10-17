// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT4JY1hTk9omJJsUlBdNJimVZ_mOT1xfw",
  authDomain: "cda-m2i-888d5.firebaseapp.com",
  databaseURL: "https://cda-m2i-888d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cda-m2i-888d5",
  storageBucket: "cda-m2i-888d5.appspot.com",
  messagingSenderId: "394329479826",
  appId: "1:394329479826:web:b6148ceb65a3296924244b",
  measurementId: "G-6F7Y135Z9N"
};

export const BASE_DB_URL = firebaseConfig.databaseURL 
export const SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
export const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);