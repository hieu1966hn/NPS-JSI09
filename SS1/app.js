/*
1. Ôn tập lại về JS
2. Mô tả về ES6 và  các cú pháp cần nhớ
3. Async & Await:
4. Luyện tập thực hành

*/


///// Để biết được đây có phải là nn lập trình hay không? Tính logic
/*
Biến: Biến là gì? biến có công dụng gì?
- Biến là nơi lưu trữ giá trị.
- Biến dùng để lưu trữ giá trị.

Cú pháp: let, var, const
- let: Biến cục bộ (nên dùng) => ít bị lỗi liên quan tới scope hoạt
- var: Biến toàn cục
- const: hằng



Kiểu dữ liệu cơ bản: boolean, string, number, undefined, null, Object

Toán tử:
1. Toán tử số học: +, - , *, /, %
2. Toán tử so sánh: >,<, <=, >=, !=,!==, ==, ===,
3, Toán tử gán: =
4. Toán tử logic: &&, ||, !
- &&: Rà soát tất cả trường hợp => chỉ lấy trường hợp false (nếu tất cả true => true) => Tất cả đk đúng cùng lúc
- || Rà soát tất cả trường hợp => chỉ lấy trường hợp true (nếu tất cả false => false) => lấy ít nhất 1 trường hợp đúng
- Toán tử ngược: VD:  !(1>2) => true => Đảo ngược kết quả của điều kiện.
5. Toán tử 3 ngôi:
- (điều kiện)?"result1": "result2"


Câu điều kiện: if, if else, if - else if - else

Loop: for, while, do while (for in, for of)
- while: ktra đk => lặp
- do while: lặp lần 1 rồi ktra đk
- Trường hợp dùng với mảng
+ for in: key là vị trí phần tử mảng
+ for of: key là từng phần tử mảng được duyệt


Array:
- cú pháp khai báo mảng:
+ let arr = [  ]; // Array
+ let arr = new Arrray();

- Các hàm CRUD với mảng:
+ arr.push(): Thêm ? phần tử vào cuối mảng
+ arr.pop() : Thêm ? phần tử vào đầu mảng
+ arr.shift() : Xóa 1 phần tử ở đầu mảng
+ arr.unShift() : Xóa 1 phần tử ở cuối mảng
+ arr.splice(box1, box2, box3): vị trí phần tử, xóa ? phần tử từ vị trí đó , thêm ? phần tử từ vị trí đó


Object
- cú pháp: let obj = {
  "key": value;
}

 */
// {
//   {
//     {
//       let i = "Đây là biến i"
//       var j = "Đây là biến j"
//     }
//   }
// }

// // console.log(i); //?
// console.log(j); //?

// Vd với for in
// let arr = [1, 3, 4, 5, 76, 7, 8]; // in ra toàn bộ phần tử mảng với for
// for (let key in arr) {
//   console.log(key);
// }
// Vd với for of
// let arr = [1, 3, 4, 5, 76, 7, 8]; // in ra toàn bộ phần tử mảng với for
// for (let key of arr) {
//   console.log(key);
// }


/// VD VỀ TOÁN TỬ LOGIC
// console.log(
//   true && true && false && true
// ); // ? true/false

// //  VD về toán tử 3 ngôi
// console.log(
//   1 < 2 ? "Đúng" : "Sai"
// );



// Spread Syntax



