// Bài toán : Lọc và in ra các số chẵn trong mảng => [2,4,6,8,10];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//// C1: 
// let arrChan = []
// for (let key in arr) {
//   if (arr[key] % 2 == 0) {
//     // console.log(arr[key]);
//     arrChan.push(arr[key]);

//   }
// }
// console.log(arrChan);

///// C2: filter => luôn là 1 mảng mới 
// console.log(arr.filter(item => item % 2 == 0));

// /// In ra các phần tử nhỏ hơn 4
// console.log(
//   arr.filter(item => item < 4)
// );



/*
Đề bài luyện tập buổi 2: 
1. In ra 1 mảng mới: có thứ tự mảng sx tăng dần (không dùng sort())
*/

let arr = [1, 3, -2, 100, 0, 4, 6, 8, 3.5, 4];
