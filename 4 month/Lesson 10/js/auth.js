// const form = document.getElementById('signInForm');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const emailInput = e.target[0];
//     const passwordInput = e.target[1];

//     fetch("https://reqres.in/api/login", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//             email: emailInput.value,
//             password: passwordInput.value
//         })
//     })

//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             const token = data.token || false;
//             if (token) {
//                 localStorage.setItem('token', token);
//                 location.replace("../index.html");
//             }
//         })
//         .catch((err) => logError(err))
// })

// ? try catch 
// console.log("Hello");
// console.log(token);
// const token = "dfsfdsfsdf";
// console.log("Bye");

// try {       
//     console.log(token);
//     const token = "dfsfdsfsdf";
// } catch (error) {
//     console.log(error);
// }

// console.log("Bye");

// ? asunc / await
async function fetchUser() {
    try {
        const user = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!user.ok) {
            throw new Error("Error fetching user");
        }
        const res = user.json();
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}

fetchUser();