// ? for loop
// for (let i = 0; i < 100; i++) {
//     console.log("Assalomu aleykum " + i);
// }

//? Continue
// for (let i = 0; i < 100; i++) {
//     if (i % 5 == 0) {
//         console.log("son");
//         continue;
//     }else {
//         console.log(i);
//     }

//     if (i == 71) {
//         break;
//     }
// }

// ? while loop
// let i = 0;
// while (i < 100) {
//     if (i % 2 == 0) {
//         console.log(i + " juft son");
//     }else {
//         console.log(i + " toq son");
//     }

//     i++;
// }

// const num = +prompt("Number: ");
// let i = 1;
// while (i < num) {
//     if (i % 2 == 0) {
//         console.log(i + " juft son");
//     }else {
//         console.log(i + " toq son");
//     }

//     i++;
// }

// ? do while loop
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while (i < 100)

// ? function write types
// ! Function declaration
// function sayHello() {
//     console.log("hello");
// }

// ! Function expression
// const sayHello = function () {
//     console.log("Hello");
// }

// ! Arroq function 
// const sayHello = () => {
//     console.log("Hello"); 
// }

// ? Hoisting in javascript
// x = s;
// console.log(x);
// var x;

// sayHello = function () {console.log("Hello");}
// console.log(sayHello);
// sayHello();

// function sayHello() {console.log("Hello");}
// var sayHello;

// console.log(sayHello);
// const sayHello;
// let sayHello = 1;

// ? Object 
// const car = {
//     color: 'red',
//     wheel: 4,
//     model: "S model",
//     brand: "Tesla",
//     fuel: "Electricity",
// }

// car.brand = "GM"
// delete car.fuel
// car.year = 2000;

// console.log(car);

// ? Array 
// const users = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

// const users = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", true, 12, { user: "One", friend: { name: "Palonchi" } }];

// const users = [{ user: "One", age: 22 },{ user: "two", age: 15 },{ user: "three", age: 35 }];

// const num = +prompt("Number: ");
// const user = users[num] ? users[num] : alert("Bu mavjud emas!");

// console.log(users[num]);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr[3] = 20;
// console.log(arr[arr.length - 1]);

// const arr = [];
// let arrLength = 0;
// function addUser() {
//     let userName = prompt("User Name: ");
//     arr[arrLength] = userName;
//     console.log(arr);
//     arrLength++;
// }

// const users = [];

// function addUser() {
//     const username = prompt("Username: ");
//     users[users.length] = username;
//     console.log(users);
// }
