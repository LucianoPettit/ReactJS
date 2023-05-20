// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHeXBpZ-Jto_NO6ad9lqCgj8hmWlG1YiY",
  authDomain: "digitalpbs-bd594.firebaseapp.com",
  projectId: "digitalpbs-bd594",
  storageBucket: "digitalpbs-bd594.appspot.com",
  messagingSenderId: "518625383924",
  appId: "1:518625383924:web:b17ff3cb24e216a36795a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


