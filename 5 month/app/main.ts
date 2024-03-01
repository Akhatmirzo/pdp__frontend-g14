//? number
// let num1: number = 2;
// num1 = 5;

//? string
// let str1: string = "Hello";
// str1 = true;
//?boolean
// let isConfirmed: boolean = confirm("Do you really want to delete it ?");
// isConfirmed = false;
//?any
// let value: any = "30";
// value = "30";
// value = false;

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is:";

add(number1, number2, printResult, resultPhrase);

const num = 5;

// ?object
let user: {
  name: string;
  age: number;
} = {
  name: "Palonchi",
  age: 29,
};
user.age = 59; 

console.log(user);

