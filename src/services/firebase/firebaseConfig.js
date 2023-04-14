import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId


  // apiKey: "AIzaSyCYODebTHxQC8LZfPkgswevVcT4ZWa3UXM",
  // authDomain: "backend-coder1.firebaseapp.com",
  // projectId: "backend-coder1",
  // storageBucket: "backend-coder1.appspot.com",
  // messagingSenderId: "375535370775",
  // appId: "1:375535370775:web:5666189ed76e3e74619252"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)