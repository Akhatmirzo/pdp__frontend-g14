// ? For in for object
// const obj = {
//     name: "akhat",
//     age: 18,
//     city: "Tashkent",
//     friend: {
//         name: "Jo'ravoy",
//         age: 20
//     }
// }

// for(key in obj) {
//     if (typeof obj[key] === "object") {
//         for(key2 in obj[key]) {
//             console.log(`${key2}: ${obj[key][key2]}`);
//         }
//     }else {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// ? for of object
// const infos = ["akhat", "tashkent", "friend", "city", "friend"];

// for(info of infos) {
//     console.log(info);
// }

// ? Objecy entries, keys and values
// const obj = {
//     name: "akhat",
//     age: 18,
//     city: "Tashkent",
//     friend: {
//         name: "Jo'ravoy",
//         age: 20
//     }
// }

// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// ? Call back 
// function sum(a, b, cb) {
//     let sum = a + b;
//     cb(sum);
// }

// function res(num) {
//     console.log("This is result: " + num);
// }

// sum(2, 5, res);

// function sum(a, b, cb) {
//     let sum = a + b;
//     cb(sum);
// }

// sum(2, 5, (num) => {
//     console.log("This is result: " + num);
// })

// const obj = {
//     name: "akhat",
//     age: 18,
//     city: "Tashkent",
//     friend: {
//         name: "Jo'ravoy",
//         age: 20
//     },
//     fullname: () => {
//         return obj.name + " " + obj.age;
//     },
//     get age1() {
//         return 22;
//     },
//     cities: function() {
//         return "Tashkent"
//     },
//     set setName(newName) {
//         this.name = newName;
//     }
// }

// console.log(obj.fullname());
// console.log(obj.age1);
// console.log(obj.cities());
// obj.setName = "Jonatan";
// console.log(obj);
