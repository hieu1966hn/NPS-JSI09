// const users = {
//   "O7edpHqSjwJUQ1j3CsIX": {
//     email: "hieu1966hn@gmail.com",
//     firstName: "Hiếu"
//   },

// }

import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

import { db } from "./firebase.js";

const cityRef = doc(db, 'cities', 'HN');
await setDoc(cityRef, { capital: true });

// UpdateDoc: Bổ sung thêm độ rộng thành phố HN
await updateDoc(cityRef, {
  range: "3360km2",
  traffic: "traffic jam",
  food: "Xiên Bẩn",
  air: "Ô nhiễm",
  drinks: ["beer", "mixue", "HighLands"]
})
