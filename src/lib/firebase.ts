import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqPBR5A9aou6e2AhrETSV3j6VhnWC7VlM",
  authDomain: "feastify-caa65.firebaseapp.com",
  projectId: "feastify-caa65",
  storageBucket: "feastify-caa65.firebasestorage.app",
  messagingSenderId: "758623520805",
  appId: "1:758623520805:web:e520a3ba44402f201b17cc",
  measurementId: "G-4NX1TZ3EPJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);