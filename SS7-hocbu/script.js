import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  onSnapshot,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

import { db } from "./firebase.js";

// Add a new document in collection "cities"
await setDoc(doc(db, "VietNamCities", "HN"), {
  name: "Ha Noi",
  country: "VietNam"
});


const cityRef = doc(db, 'VietNamCities', 'HCM');
setDoc(cityRef, { capital: true }, { merge: true });


await updateDoc(cityRef, {
  capital: false,
  peoples: "1000"
});


// Remove the 'capital' field from the document
await updateDoc(cityRef, {
  capital: deleteField()
});
