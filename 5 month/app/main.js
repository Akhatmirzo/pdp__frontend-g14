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
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is:";
add(number1, number2, printResult, resultPhrase);
var num = 5;
// ?object
var user = {
    name: "Palonchi",
    age: 29,
};
user.age = 59;
console.log(user);
