// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAM8v-Gv_mROPFd1Y2KmjnAyMtIu7sCNsM",
  authDomain: "myrealeastate.firebaseapp.com",
  projectId: "myrealeastate",
  storageBucket: "myrealeastate.appspot.com",
  messagingSenderId: "737552187447",
  appId: "1:737552187447:web:43901476cd14efc944ffb2",
  measurementId: "G-D4TTBNT2LW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const store = getStorage()