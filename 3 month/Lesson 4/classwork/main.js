// ? le vs const ES6
// ! let 
// let str = "Ibrohim"
// str = "Bobur"
// var str = "Hello"
// console.log(str);
// ! const
//const userbek = "Hellobek";
//userbek = "Byebek" // ! Error
// console.log(userbek);

// ? Switch case
// const username = prompt("Enter your username");

// if (username === "Ibrohim") {
//     console.log("Assalomu aleykum Ibrohim aka");
// } else if (username === "Javohir") {
//     console.log("Javohir keldingmi?");
// } else {
//     console.log("KImsan o'zi?");
// }

// switch (username) {
//     case "Ibrohim":
//         console.log("Assalomu aleykum Ibrohim aka");
//         break;
//     case "Javohir":
//         console.log("Javohir keldingmi?");
//         break;
//     default:
//         console.log("KImsan o'zi?");

// }

// ? Clean code
// const string = "Ibrohim";
// const string2 = "Bobur";

// const num = 4;
// const number = 10;

// const fullname = prompt("What is your name?");
// const myNumber = 20;
// const my_first_number = 30;

// ? Object
const ibrohim = {
    study: "Interhouse",
    isMaried: false,
    age: 21,
    work: "PDP",
    friend: {
        name: "Javohir",
        age: 20,
    },
};

// console.log(ibrohim["study"]);
// console.log(ibrohim.isMaried);

const key = prompt("Key:");
console.log(ibrohim[key]);

