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


/// Thêm mới document HCM => Trường dữ liệu tương tự như là HN 
await setDoc(doc(db, 'cities', 'HCM'), {
  range: "Ghi gì cũng được",
  traffic: "traffic jam",
  food: "Bún trộn Nam Bộ",
  air: "Ô nhiễm",
  drinks: ["Beer"]
});
/*
Nhưng đôi khi không có ID có ý nghĩa cho tài liệu và sẽ thuận tiện hơn
 nếu để Cloud Firestore tự động tạo ID cho bạn.
 Bạn có thể thực hiện việc này bằng cách gọi các phương thức add()
 dành riêng cho ngôn ngữ sau:
*/
// await addDoc(collection(db, "cities"), {
//   name: "Hà Nội",
//   country: "Việt Nam"
// });
// console.log("Document written with ID: ", cityRef.id);


// Xóa field air ở HCM
// Remove the 'capital' field from the document
await updateDoc(doc(db, "cities", "HCM"), {
  air: deleteField(),
});


