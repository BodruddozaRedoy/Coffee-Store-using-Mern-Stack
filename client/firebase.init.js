// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGffy29wNEJFKJHrNvjPGgIezt85YYyWg",
  authDomain: "coffee-store-using-mern.firebaseapp.com",
  projectId: "coffee-store-using-mern",
  storageBucket: "coffee-store-using-mern.firebasestorage.app",
  messagingSenderId: "941867931949",
  appId: "1:941867931949:web:3b9589b3147976fdba5ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)