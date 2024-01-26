// ? Coding paradigm
// * Procedural programing 
// * Functional programming
// * OOP => Object oriented programming

// const john = {
//     name: 'John Doe',
//     age: 30
// }

// const ibrohim = {
//     name: "Ibrohimov Ibrohim",
//     age: 25
// }

// ? class
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     info() {
//         return `${this.name} ${this.age} yoshda`;
//     }
// }

// const john = new User("John Doe", 30);
// const ibrohim = new User("Ibrohim Turaboyev", 22);

// console.log(john);
// console.log(ibrohim);
// console.log(john.info());
// console.log(ibrohim.info());

// // ? Example 
// const users = new Array("Ibrohim", "Bobur");

// Array.prototype.getFirst = function () {
//     return this[0]
// }

// console.log(users.getFirst());

// ? Database with class
// class Database {
//     constructor(key) {
//         this[key] = [];
//     }
// }

// const userDb = new Database("users");

// class UserDatabase {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const Users = new UserDatabase();

// console.log(userDb);
// ? Spread vs Rest
// ? Object destructuring
// const obj = {
//     area: [10, 20],
//     color: "red",
//     name: "Pasien",
// }

// const { area, color } = obj;
// console.log(area);
// console.log(color);
// const { area, ...others } = obj;
// console.log(area);
// console.log(others);

// const user = {
//     age: 30,
//     ...others,
// }
// console.log(user);

// ? Array Destructuring
// const users = [
//     "Bobur",
//     "E'zoza",
//     "Gulchapchap",
//     "Toshmat",
//     "Ketmonbek",
//     "Sherbek"
// ]

// const [,,user1, ...boshqalar] = users;
// console.log(boshqalar);

// const others = [...users];
// console.log(others);

// ? Deep copy vs shellow copy
// const user = {
//     name: "Palonchi",
//     age: 20,
//     skills: ["js", "react"]
// }

// // * Shallow copy
// // const ibrohim = user;

// // * Deep copy
// const ibrohim = { ...user, name: "ibrohim"};
// console.log(ibrohim);

// ? database
const users = [];

class User {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    save() {
        const user = {
            id: Date.now(),
            ...this
        }
        users.push(user);
        return user;

    }

    static findById(id) {
        return users.find((u)=> u.id === id)
    }

    static deleteById(id) {
        const index = users.findIndex((u)=> u.id === id);
        if(index !== -1) {
            return users.splice(index, 1)[0];
        }
    }
}

function addUser() {
    const user = new User("Ibrohim", 22, "Frontend");
    user.save();
    console.log(users);
}

addUser()
