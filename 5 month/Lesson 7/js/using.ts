const num1 = document.querySelector("#number1")! as HTMLInputElement;
const num2 = document.querySelector("#number2")! as HTMLInputElement;
const btn = document.querySelector("#addBtn")! as HTMLInputElement;

// const num1: number = 5;
// const num2: number = 5;

console.log(num1);

function add(n1: number, n2: number) {
  return n1 + n2;
}

btn.onclick = () => {
  console.log(add(+num1.value, +num2.value));
}
console.log(add(+num1.value, +num2.value));

// console.log(add(num1, num2));

