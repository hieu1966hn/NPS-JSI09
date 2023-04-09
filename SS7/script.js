import {
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

import { db } from "./firebase.js";

const displayData = (data) => {
  document.querySelector(".todos").innerHTML = "";
  let output = "";
  for (const item of data) {
    output += `
    <div class = "todo${item.checked ? " checked" : ""}">
      <div>
        <input data-id="${item.id}" type="checkbox" ${item.checked ? "checked" : ""} />
        <span>${item.content}</span>
      </div>
      <button class="btn remove-btn" data-id="${item.id}">x</button> 
    `
  }
};

document.querySelector(".todos").innerHTML = output;
document.querySelector(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    removeTodo(btn.getAttribute("data-id"))
  });
});

document.querySelectorAll("input[type=checkbox]").forEach((input) => {
  input.addEventListener("change", () => {
    toggleChecked(input.getAttribute("data-id"), input.checked);
  });
});


const removeTodo = (id) => {
  deleteDoc(doc(db, "todos", id));
};

const toggleChecked = (id, newValue) => {
  updateDoc(doc(db, "todos", id), {
    checked: newValue,
  });
};



