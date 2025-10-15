// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlYh4kG02oCD2YcgqNeEDd27bIgSO4qAY",
  authDomain: "netflix-gpt-c38dd.firebaseapp.com",
  projectId: "netflix-gpt-c38dd",
  storageBucket: "netflix-gpt-c38dd.firebasestorage.app",
  messagingSenderId: "391297744881",
  appId: "1:391297744881:web:f2311aea62f43a7adcce50",
  measurementId: "G-PXYD7DBJBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();