// const names = []

// function addUser(){
//   let username = prompt('Enter username')
//   names[names.length] = username
//   console.log(names)
// }

//? function
// const user ="ismoil"
// function sayHello() {
//   console.log ("Hello")
//   const user = "ibrohim"
//   function saybye() {
//     const user = "vasya"
//     console.log(user);
//   }
//   saybye()
// }
// console.log(user)

// sayHello()
//?default argument in function
// function sayHello(user = "Hurmatli foydalanuvchi"){
//   console.log(" salam alekum"+user)
// }

// sayHello()

// ? loops with arrays
const users = [
  "Ezoza",
  "Sevinch",
  "Madina",
  "Bekzod",
  "Eshmat",
  "Toshmad",
  "Otmas",
  "Otkir",
  "Borivoy",
  "Qumri"
];

// for (let i = 0; i < users.length; i++) {
//   console.log(` Assalomualaikom ` +users[i]);
// }

function findUsers(array) {
  const firstname = prompt('First Name')
  let isUserFound = false
  for (let i = 0; i < array.length; i++) {
    if (array[i] === firstname) {
      isUserFound = true
      break
    }
  }
  if(isUserFound==true) {
    console.log(` Found name ` )
  }else{
    console.log(` Not found name ` )
  }
}
findUsers(users);
