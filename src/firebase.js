import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEzDD6ldLAUnMq0UXkFSL-bY5pdabZAXI",
  authDomain: "foodiezone-15d86.firebaseapp.com",
  projectId: "foodiezone-15d86",
  storageBucket: "foodiezone-15d86.appspot.com",
  messagingSenderId: "486497519103",
  appId: "1:486497519103:web:bd9e5f78b44da5428253ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const provider=new GoogleAuthProvider();

export default app;