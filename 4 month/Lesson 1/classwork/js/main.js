// ? Truthy vs Falsy
// * false, 0, "", undefined, null, BigInt(0), Nan

// let username = null;
// NaN Not a Number

// const nan = "akhat" * 10;
// console.log(nan);

// if (nan) {
//     console.log("Hello");
// }

//! Arrays
const users = [
    "Eshmat",
    "Toshmat",
    "E'zoza",
    "Gulnoza",
    "Guli",
    "GulChapchap",
    "Mastona",
]

const ideots = [
    "Toshmat", "Mishkabek", "Qodir", "Chingiz", "Bekzod", "Nigina",
]

const nums = [1, 2, 3, 4, 5, 6];

// ? Array methods => forEach

// ideots.forEach((ideot, index, array) => {
//     console.log(ideot + " " + index + " " + array);
// });

// function looper(arr, cb) {
//     for(let i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }

// looper(users, (user) => {
//     console.log(user + " salom") ;
// })

// looper(ideots, (ideot) => {
//     console.log(ideot + " axmoq") ;
// })

// ? Map
// const newIdeots = ideots.map(ideot => {
//     return "Bu " + ideot;
// })

// console.log(newIdeots);

// ? Javascript back code Map
// function looperMap(array, cb) {
//     const newIdeots = [];
//     for(let i = 0; i < array.length; i++) {
//         let newIdeot = cb(array[i]);
//         newIdeots.push(newIdeot);
//     }
//     console.log(newIdeots);
// }

// looperMap(ideots, (ideot) => {
//     return "Bu " + ideot;
// })
// looperMap(nums, (num) => {
//     return num * 2;
// })

// ? Filter 
// const newUser = users.filter(users => {
//     return users.length == 6;
// });

// console.log(newUser);

// ? Javascript back code Filter
// function looperMap(array, cb) {
//     const newArr = [];
//     for(let i = 0; i < array.length; i++) {
//         let arr = cb(array[i]);
//         if (arr) {
//             newArr.push(array[i]);
//         }
//     }
//     console.log(newArr);
// }

// looperMap(users, (arr) => {
//     return arr.length == 6;
// })

// ? FInd
// const userToFind = "Guli";
// const isFound = users.find(user => user === userToFind);

// console.log(isFound);

// ? Javascript back code Filter
// const userToFind = "Eshmat";
const objUser = [
    {
        id: 1,
        name: "Eshmat",
    },
    {
        id: 2,
        name: "Toshmat",
    },
    {
        id: 3,
        name: "Guli",
    },
]

// function loop(names, cb) {
//     for (let i = 0; i < names.length; i++) {
//         let isFound = cb(names[i]);
//         if (isFound) {
//             return names[i];
//         }
//     }
// }

// console.log(loop(users, (user) => {
//     return user === userToFind;
// }));

// console.log(loop(objUser, (user) => {
//     return user.id == 3;
// }));

// ? FindIndex
// const userIndex = objUser.findIndex(user => user.id == 3);
// console.log(userIndex);

// ? Javascript back code FindIndex
// function loop(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         cb(array[i], i);
//     }
// }

// loop(objUser, (user, userIndex) => {
//     if (user.id == 1) {
//         console.log(userIndex);
//     }
// })

// ? Reduce
// const sum = nums.reduce((prev, curr, currIndex, arr) => {
//     return prev + curr;
// })

// console.log(sum);

// ? Sort 
const numbers = [67, 45, 2, 8, 16, 10, 5, 4];
// const sorted = numbers.sort((a, b) => a - b);
// console.log(sorted);

// ? Javascript back code Sort
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     var pivot = arr[0];
//     var left = [];
//     var right = [];

//     for (var i = 1; i < arr.length; i++) {
//         arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//     }

//     return quickSort(left).concat(pivot, quickSort(right));
// }

// const sorted = quickSort(numbers);
// console.log(sorted);

// const sortedStr = quickSort(users);
// console.log(sortedStr.reverse());
