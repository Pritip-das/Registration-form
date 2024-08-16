// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQGEVBcg782XbFv0CPIlEQwt29pIjeUk4",
  authDomain: "registration-form-b9927.firebaseapp.com",
  projectId: "registration-form-b9927",
  storageBucket: "registration-form-b9927.appspot.com",
  messagingSenderId: "893719004201",
  appId: "1:893719004201:web:9205b7fbda3339c989c838",
  measurementId: "G-YR159SRH40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);