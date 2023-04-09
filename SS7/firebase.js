import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCu711bODFkZ1S5y6PcxCEqzzoxsRcpy0M",
  authDomain: "nps-jsi09.firebaseapp.com",
  projectId: "nps-jsi09",
  storageBucket: "nps-jsi09.appspot.com",
  messagingSenderId: "285806349720",
  appId: "1:285806349720:web:d6e5ca001092c8facd2fed",
  measurementId: "G-00TRZELYCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);