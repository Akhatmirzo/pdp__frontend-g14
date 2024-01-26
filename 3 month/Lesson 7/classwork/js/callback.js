console.log(1);

setTimeout(() => {
	let a = 1;
	console.log(a);
}, 1000);

const cb = () => {
	let a = 1;
	console.log(a);
};

setTimeout(cb, 10000);

console.log(2);
