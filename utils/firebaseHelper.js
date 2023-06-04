// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuevJ8wR3M5fxnHIi_yPJFwyKbCBA04As",
    authDomain: "whatsapp-a29d5.firebaseapp.com",
    projectId: "whatsapp-a29d5",
    storageBucket: "whatsapp-a29d5.appspot.com",
    messagingSenderId: "645838019013",
    appId: "1:645838019013:web:2707aaa1308eb9aa4793ac",
    measurementId: "G-FXCXS5GNCY",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
