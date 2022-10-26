// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz_WmqCYsC4myydRfv2bcIwOYK98dmTeM",
    authDomain: "anarchyfrank-51d32.firebaseapp.com",
    databaseURL: "https://anarchyfrank-51d32-default-rtdb.firebaseio.com",
    projectId: "anarchyfrank-51d32",
    storageBucket: "anarchyfrank-51d32.appspot.com",
    messagingSenderId: "247131011954",
    appId: "1:247131011954:web:915bae266c6d4151da3beb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { app, db }