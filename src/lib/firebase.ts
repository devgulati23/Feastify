import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQ8YzXXzOzOzOzOzOzOzOzOzOzOzOzOzO",
  authDomain: "feastify-app.firebaseapp.com", 
  projectId: "feastify-app",
  storageBucket: "feastify-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnop"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);