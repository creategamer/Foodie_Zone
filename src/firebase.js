import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDEzDD6ldLAUnMq0UXkFSL-bY5pdabZAXI",
  // authDomain: "foodiezone-15d86.firebaseapp.com",
  // projectId: "foodiezone-15d86",
  // storageBucket: "foodiezone-15d86.appspot.com",
  // messagingSenderId: "486497519103",
  // appId: "1:486497519103:web:bd9e5f78b44da5428253ca"

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;