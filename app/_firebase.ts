// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrTQyrPBFvdHPGLRPjr-KMJbkdgFN9Vtw",
  authDomain: "green-products-ge144.firebaseapp.com",
  projectId: "green-products-ge144",
  storageBucket: "green-products-ge144.appspot.com",
  messagingSenderId: "105651601317",
  appId: "1:105651601317:web:c79ecbff0e7a532202724c",
  measurementId: "G-6NM5FSLDNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
