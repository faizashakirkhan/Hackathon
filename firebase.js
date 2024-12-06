import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore ,collection, addDoc, getDocs , doc,} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyADCRbzrcRAnfzRDnUP5AtOuZ6_iyRjorg",
  authDomain: "form-1098a.firebaseapp.com",
  projectId: "form-1098a",
  storageBucket: "form-1098a.firebasestorage.app",
  messagingSenderId: "922479718179",
  appId: "1:922479718179:web:26f6a034e7fb7cfac3e696",
  measurementId: "G-1K8C9ZQ3Q2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, getFirestore , signOut , collection, addDoc , db, getDocs , doc} 