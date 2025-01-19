// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRrAp7Ih16Y3dkW17AVP21bIk59CVpt0Q",
    authDomain: "locked-in-3c806.firebaseapp.com",
    projectId: "locked-in-3c806",
    storageBucket: "locked-in-3c806.firebasestorage.app",
    messagingSenderId: "71241740787",
    appId: "1:71241740787:web:6e8c32ca5155600b31a286",
    measurementId: "G-K9GMTFJ9L7"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
const provider = new GoogleAuthProvider()

export { auth, provider };