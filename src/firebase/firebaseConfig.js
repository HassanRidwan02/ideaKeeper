// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE5MTrYnxz4TrC5nSoS5Hvg_lin2Z4UII",
  authDomain: "ideakeeper-ad813.firebaseapp.com",
  projectId: "ideakeeper-ad813",
  storageBucket: "ideakeeper-ad813.firebasestorage.app",
  messagingSenderId: "628587768776",
  appId: "1:628587768776:web:ce4e6b9741a46682d76efd",
  measurementId: "G-96H6DQ4BBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);