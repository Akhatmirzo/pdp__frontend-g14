'use strict';

//////////////////////////////////////////////////
// Constuctor functions and the new operator
const Person = function (firstName, birthday) {
    // Instance properties
    this.firstName = firstName;
    this.birthday = birthday;

    // Never to this 
    // this.calcAge = function () {
    //     console.log(2037-this.birthday);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);


// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // Prototype
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037-this.birthday);
// }

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(matilda.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));



class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    register() {}

    login() {}

    logout() {}
}

class Seller extends User {
    constructor(username, password, phoneNumber, fullname) {
        super(username, password);
        this.phoneNumber = phoneNumber;
        this.fullname = fullname;
    }

    sell() {}

    add() {}
}

class Buyer extends User {
    constructor(username, password, address, email) {
        super(username, password)
        this.address = address;
        this.email = email;
    }

    order() {}
}


const ibrohim = new Seller("iDev", "buyer", "+998914545345", "Ibrohim Turaboev");
console.log(ibrohim);

const akhat = new Buyer("AkhatDev", "buyer", "Zangiota Gosnity 4", "akhat@gmail.com");
console.log(akhat);