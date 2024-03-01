var num1 = document.querySelector("#number1");
var num2 = document.querySelector("#number2");
var btn = document.querySelector("#addBtn");
// const num1: number = 5;
// const num2: number = 5;
console.log(num1);
function add(n1, n2) {
    return n1 + n2;
}
btn.onclick = function () {
    console.log(add(+num1.value, +num2.value));
};
console.log(add(+num1.value, +num2.value));
// console.log(add(num1, num2));
