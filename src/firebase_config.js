// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5F1HWEiso98t5EZkrGDqOruWzcwpp5QA",
  authDomain: "test2-523d6.firebaseapp.com",
  databaseURL: "https://test2-523d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test2-523d6",
  storageBucket: "test2-523d6.appspot.com",
  messagingSenderId: "1007798379075",
  appId: "1:1007798379075:web:ee0ae08ed28c8009daeaf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);