// ? Scrolling
// document.addEventListener('scroll', (event) => {
//     if (window.scrollY >= 200) {
//         alert(200);
//     }
// })

// ? Keydown 
// document.addEventListener('keydown', (event) => {
//     if (event.keyCode == "H" && event.shiftKey) {
//         alert("Hello");
//     }
// });

// ? Children
// const boxEL = document.querySelector('.box');
// console.dir(boxEL);
// for (title of boxEL.children) {
//     console.dir(title);
// }

// ? Capture phase vs Bubling phase
document.querySelector("#parent").addEventListener('click', (event) => {
    alert("Div clicked");
}, true)
document.querySelector("#child").addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Button clicked");
})