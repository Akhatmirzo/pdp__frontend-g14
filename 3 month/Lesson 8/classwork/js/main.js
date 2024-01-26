// ? Arrow function
// const sayHello = name => "Hello" + name;
// const text = sayHello("Akhat");
// console.log(text);

// ? Call back function
// const sayHello = (callback) => {
//     console.log("Hello");
//     callback("Akhat");
// }

// const greeting = (name) => {
//     console.log( name ? `How are you ${name}` : "How are you?");
// }

// sayHello(greeting);


// ? IIFE Immediately invoked function expression
// (function sayHello() {
//     console.log("Hello");
// })();

// ((name) => {
//     console.log("Hello" + name);
// })("Akhat");

// ? Recursive function 
// function userName() {
//     let name = prompt("Enter your name: ");
//     if (name) {
//         alert(name);
//     }else {
//         userName();
//     }
// }

// userName();

// ? Object methods
// const user = {
//     name: "Akhat",
//     surname: "umarov",
//     fullname() {
//         return `${this.name} ${this.surname}`; 
//     },
//     age() {
//         return 30;
//     },
//     work: function() {
//         return "Software Engineer"
//     }
// }

// console.log(user.fullname());
// console.log(user.age());
// console.log(user.work());

// ? Optional chaining
// const profile = {
//     // name: "Akhat",
//     surname: "umarov",
//     phone: {
//         number: "12345321"
//     }
// }

// if (profile?.name) {
//     console.log(profile);
// }else {
//     console.log("Error!!");
// }
// console.log(profile?.phone?.number);

//? Getter vs setter
// const user = {
//     name: "Akhat",
//     surname: "umarov",
//     get fullname() {
//         return this.name + " " + this.surname;
//     },

//     set setName(newName) {
//         this.name = newName;
//     }
// }

// console.log(user.fullname);
// user.setName = "Ismoil";
// console.log(user);
// console.log(user.fullname);