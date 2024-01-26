// ? setTimeout
// console.log("Bomba otildi");

// const bomb = setTimeout(() => {
//     console.log("Booom");
// }, 1000 * 3);

// document.querySelector("#defuce").addEventListener("click", () => {
//     clearTimeout(bomb);
//     console.log("Bomb was defuced! Counter-Terrorist win!");
// });

// ? setInterval
// const bomb = setInterval(() => {
//     console.log("Booom");
// }, 1000 * 3);

// document.querySelector("#defuce").addEventListener("click", () => {
//     clearInterval(bomb);
//     console.log("Bomb was defuced! Counter-Terrorist win!");
// });

// ? flashbang
// const stopFlash = () => {
//     setTimeout(() => {
//         console.log("Visible");
//     }, 3000)
// }

// console.log("Flash otildi");

// const flash = setInterval(() => {
//     console.log("Tiiiiing");
//     stopFlash();
// }, 1000 * 2);

// ? Date
// const dateNow = new Date();
//* hour/minutes/seconds
// const hour = dateNow.getHours();
// const minutes = dateNow.getMinutes();
// const seconds = dateNow.getSeconds();

// * Month, Year
// const months = ["Yanvar", "Fevral", "Mart", "Aprel", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];

// const month = months[dateNow.getMonth()];
// console.log(month); 

//? Speech
// const speechRecogination = new webkitSpeechRecognition();
// console.log(speechRecogination);
// speechRecogination.lang = "uz-UZ";

// document.querySelector("#defuce").addEventListener("click", () => {
//     speechRecogination.start();
// });

// speechRecogination.onstart = function () {
//     console.log("You are speaking");
// }

// speechRecogination.onresult = function (event) {
//     const text = event.results[0][0].transcript;
//     document.body.style.background = text;
//     document.body.innerHTML += text; 
//     console.log(text);
// }

// speechRecogination.onend = function () {
//     console.log("Stop talking");
// }

// ? Video camera
// const video = document.querySelector('video');

// function startWebCam() {
//     if (navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices
//         .getUserMedia({video: true})
//         .then(function (stream) {
//             video.srcObject = stream
//             video.play();
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//     }
// }

// startWebCam();

// ? Video screen
const video = document.querySelector('video');

function startWebCam() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
        .getDisplayMedia({video: {displaySurface: "window"}})
        .then(function (stream) {
            video.srcObject = stream
            video.play();
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

startWebCam();