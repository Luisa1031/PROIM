// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaEoCUyBH2vF10R7IYfatFzA54W7gt6yw",
  authDomain: "erparquitectura-5d0fa.firebaseapp.com",
  projectId: "erparquitectura-5d0fa",
  storageBucket: "erparquitectura-5d0fa.firebasestorage.app",
  messagingSenderId: "609943109713",
  appId: "1:609943109713:web:f49061250c06bf4aa5f870",
  measurementId: "G-5QS2K0K2X2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc };
