

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVvHt5hCE8_zdUmEYAYp_AUN8t5ryb2DQ",
  authDomain: "app-4f58f.firebaseapp.com",
  projectId: "app-4f58f",
  storageBucket: "app-4f58f.appspot.com",
  messagingSenderId: "239800029969",
  appId: "1:239800029969:web:2ac0719df65349297772b0",
  measurementId: "G-PEGM6QWV5V",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

 



