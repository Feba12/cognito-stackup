import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBb7c0tfRQBv_L1qqVmi5oLP-vFKK_IXaA",
  authDomain: "ziana-website.firebaseapp.com",
  databaseURL: "https://ziana-website-default-rtdb.firebaseio.com",
  projectId: "ziana-website",
  storageBucket: "ziana-website.appspot.com",
  messagingSenderId: "362795139781",
  appId: "1:362795139781:web:e07c58e7ea6d6f772da6ac",
  measurementId: "G-9QPC0PXFXK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { app, db, storage, auth };
