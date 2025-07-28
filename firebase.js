// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBGNf4N8Nj32dgu36ij4iq6fL9U3UPZw7U",
  authDomain: "hackathon-ccb9b.firebaseapp.com",
  databaseURL: "https://hackathon-ccb9b-default-rtdb.firebaseio.com",
  projectId: "hackathon-ccb9b",
  storageBucket: "hackathon-ccb9b.appspot.com",
  messagingSenderId: "671164908643",
  appId: "1:671164908643:web:18cf511fdbd7413b91a456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
