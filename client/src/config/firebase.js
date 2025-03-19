import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGUZ2ovwUB_OlTsBvDYI_nsr3NJPOwHCU",
  authDomain: "stroomlia.firebaseapp.com",
  projectId: "stroomlia",
  storageBucket: "stroomlia.firebasestorage.app",
  messagingSenderId: "153853389573",
  appId: "1:153853389573:web:0bfe6959f325daac6ae56c"
};

// Initialiserer appen
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);