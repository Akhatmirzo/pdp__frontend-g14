//?SET
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

// console.log(orderSet);
// console.log(new Set('Jonas'));
// console.log('Arrayni uzunligi = ', orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// for (const order of orderSet) console.log(order);

//! EXAMPLE
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

//?MAP
// const rest = new Map();
// rest.set("name", "Calassico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
// 	.set("categories", ["Italian", "Pizzeria", "Vegitarian", "Organic"])
// 	.set("open", 11)
// 	.set("close", 23)
// 	.set(true, "We are open :D")
// 	.set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get("1"));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// // rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//?
const question = new Map([
	["question", "What is the best programming language in the world?"],

	[1, "C"],
	[2, "Java"],
	[3, "JavaScript"],
	["correct", 3],
	[true, "Correct🎉"],
	[false, "Please try again!"],
]);
console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
	if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer "));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));
console.log(...question);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
