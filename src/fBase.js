import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuniWcmaEA0Ve86fIUrK-gf-9usj6x_Ag",
  authDomain: "nwitter-40438.firebaseapp.com",
  projectId: "nwitter-40438",
  storageBucket: "nwitter-40438.appspot.com",
  messagingSenderId: "729814269397",
  appId: "1:729814269397:web:ff4f3ee97b19e9b86b115c",
};

export const firebaseInstance = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
