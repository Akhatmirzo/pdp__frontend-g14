// (function cb() {
// 	let a = "test";
// 	console.log(a);
// })();
// Immitedly Invoke Function
console.log("1");

(() => {
	console.log("2");
})();

console.log("3");
// console.log(prvt);
