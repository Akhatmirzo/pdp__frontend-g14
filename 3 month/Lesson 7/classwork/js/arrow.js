function myProfileOld() {
	return {
		name: "Ali",
		age: 10,
	};
}

const myProfile = () => ({
	name: "Ali",
	age: 10,
});

console.log(myProfile());
