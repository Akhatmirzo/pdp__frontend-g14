const username = "Akhatmirzo";
console.log(new String());

//? at() => stringni berilgan positsiya kiritilsa positsiyada turgan belgini qaytaradi
// console.log(username.at(0));

// ? charAt() => at() methodi bilan bir xil
// console.log(username.charAt(5));

// ? concat() => 2ta stringni qo'shib beradi
// console.log(username.concat(" Salom"));

// ? includes() => String ni ichida boshqa str mavjudliklini tekshirish
// console.log(username.includes("zo"));

// ? padStart() vs padEnd() 
// console.log(username.padStart(100, "--salom--"));
// console.log(username.padEnd(100, "--salom--"));

// ? search()
// console.log(username.search("zo"));

// ? slice()
// const searchStringPosition = username.search("mir");
// const slicedString = username.slice(searchStringPosition, searchStringPosition + 3);
// console.log(slicedString);

// ? split()
// console.log(username.split(""));

// ? toString()
// console.log((5).toString());

// ? Events

// function sayHelo() {
//     alert("Hello");
// }
// function sayBye() {
//     alert("Bye");
// }

// const buttonEl = document.querySelector("#btn");
// console.dir(buttonEl);

// buttonEl.onclick = sayHelo;
// buttonEl.onclick = sayBye;

// ? AddEventListener() 
// const buttonEl = document.querySelector("#btn");

// buttonEl.addEventListener("click", () => {
//     alert("Hello");
// })
// buttonEl.addEventListener("click", () => {
//     alert("Bye");
// })

// ? StyLE IN JS
// const buttonEl = document.querySelector("#btn");

// buttonEl.style.backgroundColor = "red";
// buttonEl.style.color = "white";
// buttonEl.style.border = "none";
// buttonEl.style.fontSize = "20";

// ? classList in js
// const buttonEl = document.querySelector("#btn");

// buttonEl.addEventListener("click", () => {
//     buttonEl.classList.toggle("btn-primary");

    // if (buttonEl.classList.contains("btn-primary")) {
    //     buttonEl.classList.remove("btn-primary");
    // }else {
    //     buttonEl.classList.add("btn-primary");
    // }
// })

// ? Anchor => Stringni a tegini ichiga joylashtirib beradi.
// console.log(username.anchor("look"));

// ? Big() => String ni big tegi ichiga joylashtirib beradi
// console.log(username.big());

// ? blink() => String ni blink tegi ichiga joylashtirib beradi
// console.log(username.blink());

// ? bold() => String ni bold tegi ichiga joylashtirib beradi
// console.log(username.bold());

// ? charCodeAt() => kiritilgan positsiyadagi belgini unicodini qaytaradi
// console.log(username.charCodeAt(2));

// ? codePointAt() => kiritilgan positsiyani unicodini qaytaradi
// console.log(username.codePointAt(0));

// ? Fixed() => Stringni tt tegini ichiga joylashtirib beradi
// console.log(username.fixed());

// ? fontSize() => Font size
// document.body.innerHTML = username.fontColor('#fff');
// document.body.innerHTML = username.fontsize('15');