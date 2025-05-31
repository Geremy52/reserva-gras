// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfw6EvTfkuNNoZIdEFj3Gkm2nz5vgsDfQ",
  authDomain: "reserva-grass.firebaseapp.com",
  projectId: "reserva-grass",
  storageBucket: "reserva-grass.firebasestorage.app",
  messagingSenderId: "226505464107",
  appId: "1:226505464107:web:336b5cb1129bfe1d020d6e",
  measurementId: "G-2GLYMSQ854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);