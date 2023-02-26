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


Hàm là gì? Dùng để làm gì?
- Hàm là 1 chương trình con được khai báo trong hệ thống hoặc bên ngoài
- Dùng để xử lý 1 tác vụ hoặc 1 tính năng mà hàm được sinh ra để giải quyết 
- Cú pháp khai báo:
+ function tenHam () {

}
+ const tenHam = () => {

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
let obj = {
  "name": "john",
  age: 24,
  address: "22 Jump Street",
  job: "Dev"

}


let obj2 = {
  name: "Hiếu",
  age: 25,
  address: "Hà Nội",
}


////// Gộp đối tượng 1 và đối tượng 2 => Obj3
let obj3 = Object.assign(obj, obj2);
console.log("obj3: ", obj3);
/// => Object mới sinh ra có tất cả các thuộc tính từ các đối tượng khác nhưng giá trị luôn là giá trị của object cuối cùng


///// Spread syntax sử dụng với hàm (Nợ buổi 2 xử lý )

// let sum = (x, y, z) => {
//   return x + y + z
// }

// // console.log(
// //   sum(1, 2, 3, 4)
// // );//?  => 6 (không tính 4)


// let num = [1, 2, 3, 4];
// console.log(
//   sum(...num)
// );// ? => 



///// Copy đối tượng
// let Nguoi = {
//   name: "john",
//   age: 78
// }

// console.log("Nguoi: ", Nguoi);
// let copy_Nguoi = { ...Nguoi }
// console.log("copy_Nguoi: ", copy_Nguoi);//? = Đúng côpy

// Ví dụ cú pháp sai không bao giờ được dùng cái này?
// let copy_Nguoi = Nguoi;
// copy_Nguoi.name = "Trump"
// console.log("copy_Nguoi: ", copy_Nguoi);

//// NỐI Array
// let arr1 = ['abc', "gaming", "123"];
// let arr2 = ["Snake", "Cat", "Dog"];

/// C1:  => Nối 2 mảng này với nhau 
// let arr3 = arr1.concat(arr2);
// console.log("arr3: ", arr3); // => done

/// C2:  => Nối 2 mảng này với nhau 
// let arr3 = [...arr1, ...arr2]; // => done

////// Giới thiệu về Map
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/// Tăng từng phần tử mảng lên 1 đơn vị in ra mảng mới?

// let arrNew = arr.map((item) => {
//   return item + 1
// })

// Viết gọn
let arrNew = arr.map(item => item + 1);
console.log("arrNew: ", arrNew);

//// In ra từng phần tử mảng là bình phương của chính nó?
let arrBinhPhuong = arr.map(item => item * item);
console.log("arrBinhPhuong: ", arrBinhPhuong);

/*
=> Mô tả: Map là 1 hàm dùng để thực hiện 1 hành động với từng phần tử mảng và kết quả trả về là 1 mảng mới với hành động hàm đó
*/