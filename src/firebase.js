// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlbCa-lJhtyOQSndntp6_3NUIiEtjC2dM",
    authDomain: "lockedin-b5ca6.firebaseapp.com",
    projectId: "lockedin-b5ca6",
    storageBucket: "lockedin-b5ca6.firebasestorage.app",
    messagingSenderId: "284226522135",
    appId: "1:284226522135:web:a30c2901e485b915412052",
    measurementId: "G-8HW5G32L04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);