// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCTfgaM1PrVhPU4_glc04QKkfcLpBEgr4Q",
  authDomain: "memory-card-game-5cdbb.firebaseapp.com",
  projectId: "memory-card-game-5cdbb",
  storageBucket: "memory-card-game-5cdbb.firebasestorage.app",
  messagingSenderId: "114993890000",
  appId: "1:114993890000:web:af0569e59c520b8a4fd4d5",
  measurementId: "G-KVM8FX65DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);